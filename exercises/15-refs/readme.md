## Intro

If you remember the `BirthdayParty` exercise, you may have noticed that it has duplicated logic:

```js
class GuestList extends React.Component {
  ...,
  changeName(ev) {
    this.setState({
      guestName: ev.target.value
    });
  }
  changeBrings(ev) {
    this.setState({
      guestBrings: ev.target.value
    });
  }
  ...
};
```

`changeName` and `changeBrings` have the exact same implementation. A way to solve this is by keeping track of both inputs and when a change occurs, get the value of both. With references we can get our components instance.

```js
class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      es6: true,
      node: true,
      react: false
    };
  }

  toggle() {
    console.log('es6:', this._es6.props.checked,
      'node:', this._node.props.checked, 'react:', this._react.props.checked);
  }
  render() {
    return (<div>
      <p><input ref={(input) => this._es6 = input} checked={this.state.es6} onChange={this.toggle.bind(this)} type='checkbox' /></p>
      <p><input ref={(input) => this._node = input} checked={this.state.node} onChange={this.toggle.bind(this)} type='checkbox' /></p>
      <p><input ref={(input) => this._react = input} checked={this.state.react} onChange={this.toggle.bind(this)} type='checkbox' /></p>
    </div>);
  }
};
```

In this example, every time `toggle` is invoked it logs something like `es6: true node: true react: false`. Each reference is the current instance of the component it refers to. E.g. `this._react` will be an instance of the `<input>` component.

Having those references, you can use them to get the properties of DOMNodes:

```
class Checkboxes extends React.Component {
  ...,
  toggle() {
    const es6 = this._es6;
    const isES6Checked = es6.props.checked;
  }
  ...
};
```

Note that references could also be useful if you need to call other component functions (e.g invoke `blur` or `focus` events on parent components).

## Challenge!

Edit `index.js` so that:
  1. `changeName` event handler is shared between `first` and `last` `<input>`s;
  2. `first` and `last` `<input>`s have a `ref` attribute;

Despite the fact that this is definitively not the best way of updating our components state, it serves the purpose of understanding how references work.

### Resources
  * [Working With the Browser](https://facebook.github.io/react/docs/working-with-the-browser.html)
  * [Refs to Components](https://facebook.github.io/react/docs/more-about-refs.html)
  * [ReactDOM.findDOMNode](https://facebook.github.io/react/docs/top-level-api.html#react.finddomnode)
