## Intro

At specific points of a component's lifecycle, various methods can be specified to hook into those events.

### Updating

Component instances can live even after you create render them again with new properties. Let's see an example:

```js
const links = [
  'http://www.24i.com/',
  'http://www.24i.com/blog'
];

class Anchor extends React.Component {
  componentDidMount() {
    console.log('Anchor mounted');
  }
  render() {
    console.log('Anchor rendering');
    return (<a href={this.props.href}>{this.props.href}</a>);
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      href: ''
    };
  }

  tick() {
    this.setState({
      href: links[Math.floor(Math.random() * 2)]
    });
  }
  componentDidMount() {
    setInterval(this.tick.bind(this), 500);
  }
  render() {
    return (<Anchor href={this.state.href} />);
  }
};
```

If you run this example, you will see that "Anchor mounted" will only be logged once even though `App.render` is called multiple times rendering `Anchor` with different `props`.  However, if you hook into the `componentWillReceiveProps` event in `Anchor`:

```js
class Anchor extends React.Component {
  componentDidMount() {
    console.log('Anchor mounted');
  }
  componentWillReceiveProps() {
    console.log('Anchor is receiving new props');
  }
  render() {
    return (<a href={this.props.href}>{this.props.href}</a>);
  }
});
```

You'll see a log that will resemble to something like:

```
Anchor mounted
Anchor is receiving new props
Anchor is receiving new props
Anchor is receiving new props
Anchor is receiving new props
Anchor is receiving new props
Anchor is receiving new props
...
```

That happens because React keeps track of each component instance and it's children and avoids trashing and creating new component instances when only the `props` change.

#### Events

 * `componentWillReceiveProps`: Invoked when a component instance is updated with new props. It's not invoked for the initial `render`, you can mutate the state without triggering another render;
 * `shouldComponentUpdate`: Invoked before re-rendering a component instance - either because it was updated or because the state was mutated with `setState`. With this method, you can decide whether it should render or not;
 * `componentWillUpdate`: Invoked immediately before re-rendering. The state cannot be mutated using `setState` in this method;
 * `componentDidUpdate`: Invoked immediately after the component was re-rendered and the DOM reflects the new view.

## Challenge!

  1. Use `componentWillReceiveProps` in the `Display` component to define `showColon`. Idea: only show colon when `ms > 500`. Observe the result;
  2. Use `shouldComponentUpdate` to decide whether it should render. Idea: only render when `(ms % 5) === 0`. Observe the result;

## Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
