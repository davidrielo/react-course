## Challenge!

  1. Go trough all the lifecycle methods you learned about and implement all of them in the `Display` component. On each one log the component name and the order you think they will be called. Change the order number until you can figure out the right answer. Ex:

```javascript
class Display extends React.Component {
  ...,
  shouldComponentUpdate() {
    console.log(1, 'shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log(2, 'componentWillUpdate');
  }
  componentWillUnmount() {
    console.log(3, 'componentWillUnmount');
    clearInterval(this.interval);
  }
  componentWillReceiveProps() {
    console.log(4, 'componentWillReceiveProps');
  }
  componentWillMount() {
    console.log(5, 'componentWillMount');
  }
  componentDidUpdate() {
    console.log(6, 'componentDidUpdate');
  }
  componentDidMount() {
    console.log(6, 'componentDidMount');
    this.interval = setInterval(this.tick, 100);
  }
  render() {
    console.log(7, 'render');
    return ...;
  }
  ...
};
```

## Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
