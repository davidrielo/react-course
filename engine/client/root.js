require('./github.css');
require('./bootstrap.styl');
require('./style.css');

const React = require('react');
const ReactHotLoader = require('react-hot-loader');

const {
  AppContainer
} = ReactHotLoader;

module.exports = () => {
  const Page = require('./page');

  return (
    <AppContainer>
      <Page />
    </AppContainer>
  );
};
