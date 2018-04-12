## Intro

A good way to validate the props that are received by components, you can use the `propTypes` to define property types and if they are required. A good side effect of this, is that you can use that as a way to self-document components.

```js
class Anchor extends React.Component {
  render() {
    return (<a href={this.props.href} onClick={this.props.onClick.bind(this)} />);
  }
}
Anchor.propTypes = {
  href: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
}
```

In the example `Anchor` accepts two properties:
  * `href`:
    * required
    * must be a string
  * `onClick`
    * must be a function

`React.PropTypes` exposes a much more validators. You should check the [documentation](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) to know about them all.


You should not rely on `propTypes` in production though. For performance reasons, props are only validated when React is run in development mode.

## Challenge!

  * Remember the Book example? Review the code;

Edit `index.js`, `BookForm.js` and `Book.js` so that:
  1. All components validate its props accordingly. If a prop is required for the component to work properly, it should be validated as that.

### Resources

  * [Prop Validation](https://facebook.github.io/react/docs/reusable-components.html#prop-validation)
