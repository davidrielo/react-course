require('./bootstrap');

const babel = require('babel-core');
const clone = require('clone');
const find = require('lodash.find');
const first = require('lodash.first');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

const root = path.join(__dirname, '../..');
const babelConfig = JSON.parse(fs.readFileSync(path.join(root, '.babelrc'), 'utf-8'));

const compile = (req, res, next) => {
  const newConfig = clone(webpackConfig);

  newConfig.context = path.join(root, './exercises');
  newConfig.entry[newConfig.entry.length - 1] = `./${req.query.slug}/index.js`;
  newConfig.output.filename = `${req.query.slug}.js`;

  const compiler = webpack(newConfig);

  compiler.run((err, {
    hash
  }) => {
    if (err) {
      return next(err);
    }

    res.send({
      successfull: true,
      hash
    });
  });
};

const doesExport = (req, res, next) => {
  const filename = path.join(root, './exercises/', `./${req.query.slug}/index.js`);

  babel.transformFile(filename, babelConfig, (err, transformed) => {
    if (err) {
      return next(err);
    }

    const {
      ast: {
        program: {
          body
        }
      }
    } = transformed;

    if (!Array.isArray(body) || !body.length) {
      return res.send({
        exports: false
      });
    }

    const token = find(body, ({
      type,
      expression
    }) => {
      if (type !== 'ExpressionStatement') {
        return;
      }

      if (expression.type !== 'AssignmentExpression') {
        return;
      }

      const {
        left,
        right
      } = expression;

      if (!left.object || left.object.name !== 'module') {
        return;
      }

      if (!left.property || left.property.name !== 'exports') {
        return;
      }

      return true;
    });

    if (!token) {
      return res.send({
        exports: false
      });
    }

    res.send({
      exports: true
    });
  });
};

const embed = (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <body>
        <div id="root"></div>
        <script type="text/javascript" src="static/${req.query.slug}.js"></script>
      </body>
    </html>
  `);
};

const server = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  setup: (app) => {
    app.get('/compile', compile);
    app.get('/exports', doesExport);
    app.get('/embed', embed);
  },
  historyApiFallback: {
    index: './engine/server/index.html'
  },
  hot: true
});

server.listen(2424, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:2424');
});
