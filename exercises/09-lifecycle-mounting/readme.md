## Intro

At specific points of a component's lifecycle, various methods can be specified to hook into those events.

### Mounting

 * `componentWillMount`: Invoked once, immediately before the initial rendering occurs. You can mutate the state that it will be reflected when rendered for the first time.
 * `componentDidMount`: Invoked once, **after** the being rendered for the first time and attached to the DOM.


```js
class extend React.Component {
  componentWillMount() {
    console.log('component is going to render');
  }
  componentDidMount() {
    console.log('component just rendered');
  }
  render() {
    console.log('component is rendering');
    return (<h1>Heyo</h1>);
  }
};
```

You can use `componentDidMount` to start logic in the component, like some asynchronous data fetching, timers, etc.

## Challenge!

Edit `index.js` so that:
  1. `componentWillMount` has an implementation where it mutates `this.state.count` to `2`. Observe the resulting view and the log;
  2. `componentDidMount` has an implementation where it logs both the current state and the component's DOMNode using `ReactDOM.findDOMNode`;

## Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
 * [findDOMNode](https://facebook.github.io/react/docs/react-dom.html#finddomnode)
