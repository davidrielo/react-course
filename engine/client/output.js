const Fetch = require('fetch-ponyfill')();
const React = require('react');
const url = require('url');

const {
  fetch
} = Fetch;

const {
  PropTypes
} = React;

/*
  validating -> component
             -> error
             -> compiling -> error
                          -> source
*/
const Result = React.createClass({
  getInitialState: function() {
    return this.setup(this.props);
  },
  href: function({
    slug,
    pathname
  }) {
    const {
      host
    } = window.location;

    return url.format({
      host: host,
      pathname: pathname,
      query: {
        slug
      }
    });
  },
  get: function(ctx) {
    return fetch(this.href(ctx)).then((res) => {
      return res.json();
    });
  },
  compile: function(slug) {
    this.setState({
      validating: false,
      compiling: true
    });

    return this.get({
      pathname: '/compile',
      slug
    });
  },
  exports: function(slug) {
    return this.get({
      pathname: '/exports',
      slug
    });
  },
  onError: function(err) {
    this.setState({
      error: err
    });
  },
  setup: function(props) {
    const {
      slug
    } = props;

    const self = this; // arrow functions are not working somehow

    const compiled = (src) => {
      self.setState({
        compiling: false,
        validating: false,
        source: src
      });
    };

    const doesExport = ({
      exports
    }) => {
      if (exports) {
        return self.renderLive(slug);
      }

      return self.compile(slug)
        .then(compiled);
    };

    self.exports(slug)
      .then(doesExport)
      .catch((err) => self.onError(err));

    return {
      validating: true
    };
  },
  componentWillReceiveProps: function(nextProps) {
    // reset state and get new one
    this.setState(Object.assign({
      validating: false,
      error: false,
      compiling: false,
      component: false,
      source: false
    }, this.setup(nextProps)));
  },
  renderLive: function(slug) {
    let Component = null;
    let component = null;

    try {
      Component = require(`../../exercises/${slug}/index.js`);
    } catch (err) {
      return this.onError(err);
    }

    try {
      component = (
        <Component />
      );
    } catch (err) {
      return this.onError(err);
    }

    this.setState({
      validating: false,
      component
    });
  },
  renderSource: function() {
    const {
      slug
    } = this.props;

    const href = this.href({
      pathname: '/embed',
      slug
    });

    return (
      <iframe
        className='frame'
        src={href}
      />
    );
  },
  render: function() {
    const {
      error,
      compiling,
      component,
      source,
      validating
    } = this.state;

    const {
      onStatus
    } = this.props;

    const _source = !error && source ? this.renderSource() : null;

    const _component = !error && component || null;

    const _error = error ? (
      <pre>
        {error.toString()}
        {'\n'}
        {error.stack}
      </pre>
    ) : null;

    const _compiling = !error && compiling ? (
      <pre>Compiling...</pre>
    ) : null;

    const _validating = !error && validating ? (
      <pre>Validating...</pre>
    ) : null;

    const alerts = {
      isLive: {
        title: 'Hot Reload Active!',
        msg: 'You don\'t need to refresh to get an updated version of your work'
      },
      isNotLive: {
        title: 'Refresh to update!',
        msg: 'Hot reload is not active so you need to refresh to get an updated version of your work'
      }
    };

    const isLive = _component ? (
      <div className='alert alert-success'>
        <strong>{alerts.isLive.title}</strong> {alerts.isLive.msg}
      </div>
    ) : null;

    const isNotLive = _source ? (
      <div className='alert alert-warning'>
        <strong>{alerts.isNotLive.title}</strong> {alerts.isNotLive.msg}
      </div>
    ) : null;

    return (
      <div>
        {isLive}
        {isNotLive}
        <div className='component' id='output'>
          {_validating}
          {_error}
          {_component}
          {_compiling}
          {_source}
        </div>
      </div>
    );
  }
});

Result.propTypes = {
  slug: PropTypes.string
};

Result.defaultProps = {
  slug: ''
};

const Editor = ({
  slug
}) => {
  if (!slug) {
    return null;
  }

  return (
    <p>
      Use your text editor of choice to edit the files in
      <span className='monospace'> exercises/{slug}/</span>.<br />
      The result will be rendered below:
      <br />
    </p>
  );
};

Editor.propTypes = {
  slug: PropTypes.string
};

Editor.defaultProps = {
  slug: ''
};

const Output = ({
  slug,
  title
}) => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <h4>{title}</h4>
          <Editor
            slug={slug}
          />
          <Result
            slug={slug}
          />
        </div>
      </div>
    </div>
  );
};

Output.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string
};

Output.defaultProps = {
  title: '',
  slug: ''
};

module.exports = Output;
