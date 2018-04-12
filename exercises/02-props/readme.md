## Intro

Properties are parameters passed to a component. Think of them as function parameters: when you call a function you pass parameter to it.

The way you pass properties to a component is by declaring attributes in its tag. Think about the `href` attribute in the anchor tag:

```html
<a href='http://www.24i.com/'>24i!</a>
```

If `a` were a React component, you would be passing `href` as property to it. Let's try this by mocking an anchor in React:

```javascript
class Anchor extends React.Component {
  render() {
    return (<a href={this.props.href}></a>)
  }
};

class App extends React.Component {
  render() {
    return (<Anchor href='http://www.24i.com/' />);
  }
};
```

Notice how `Anchor` has access to `this.props.href`.

## Challenge!

In your index.js you have a `Book` and a `Library` component. Edit them so that:
  1. `Book` has a `title` and `read` default properties. The `title` can be an empty string and `read` can be `false`;
  2. `Book.render` uses `this.props` to render a `<p>` with the `title` and a checkbox `<input>` with the `read` status;
  3. `Library` uses the `Book` tag attributes to pass the `title` and `read` values to it.

### Resources

 * [Transferring Props](https://facebook.github.io/react/docs/transferring-props.html)
 * [Default Prop Values](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)
