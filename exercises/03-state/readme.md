## Intro

Remember how `props` are like the parameters of a function? How about internal logic, how do we manage it? For that, each component has its internal `state`.

```javascript
class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
  }
  render() {
    return (<input type='checkbox' checked={this.state.checked} />);
  }
};
```

In this example, `this.state.checked` belongs only to `Checkbox` and is `Checkbox` that has to manage it. Think of it as a private variable.

`this.state` can suffer mutation by using `this.setState`:

```javascript
class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
  }
  toggle() {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (<input type='checkbox' checked={this.state.checked} onChange={this.toggle.bind(this)} />);
  }
};
```

When you `setState`, `render` is called again with a new state. Only using `setState` is going to change the values of `this.state` and trigger a new render.

### `props` vs `state`

  * `props` is kind of a public API that each component exposes;
  * `state` is the internal and private values that a component needs to keep to  manage its logic.


|                                              | `props` | `state` |
| -------------------------------------------- |:-------:|:-------:|
| Can get initial value from parent component? |    ✔    |    ✘    |
| Can be updated by parent component?          |    ✔    |    ✘    |
| Should be mutated inside component?          |    ✘    |    ✔    |


## Challenge!

Given an initial state:
```js
{
  collapsed: true,
  label: 'Show',
  msg: 'Such state'
}
```

Edit `index.js` so that:

  1. `HiddenMessage` has a initial state;
  3. the implementation of `onClick` mutates the current `state` in a way that:
    * toggles `collapsed`;
    * `label` has the value of "Hide" or "Show" depending on the new value of `collapsed`;

### Resources

 * [setState](https://facebook.github.io/react/docs/component-api.html#setstate)
