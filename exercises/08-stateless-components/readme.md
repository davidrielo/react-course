## Intro

Most of the time your components don't manage any state. When that's the case, having a a full class with all of the state and lifecycle logic associated with it can be overkill. Stateless components solve that problem:

```js
const Anchor = (props) => {
  return (<a href={props.href}></a>);
};

class App extends React.Component {
  render() {
    return (<Anchor href='http://www.24i.com/' />);
  }
};
```

This components also support `propTypes` and `defaultProps`:

```js
const Anchor = (props) => {
  return (<a href={props.href}></a>);
};

Anchor.propTypes = {
  href: React.PropTypes.string
};

Anchor.defaultProps = {
  href: 'http://www.24i.com/'
};
```

Please take into account that you can also use the destructuring ES6 feature and `Anchor` can be defined like the following:

```js
const Anchor = ({ href }) => {
  return (<a href={href}></a>);
};
```

Much like the Node.js concept of having tiny modules that compose on each-other to build large and complex systems, stateless components encourage the same pattern of trying to decouple your components as much as possible and have as little state as possible on each one.

## Challenge!

 * Edit `index.js`, `GuestList.js`, `Guest.js`, `BirthdayInfo.js` so that every component that can be a stateless component, is a stateless component.
