## Intro

Because any type of variable can be used in the `props` of a component, you can use this pattern to communicate between Components:

```javascript
class HeyMachine extends React.Component {
  constructor() {
    super();
  }
  onClick() {
    this.props.onHey('HEY');
  }
  render() {
    return (<button onClick={this.onClick.bind(this)}>Build an "Hey"</button>);
  }
});

class App extends React.Component {
  constructor() {
    super();
  }
  gotHey(msg) {
    window.alert(msg);
  }
  render() {
    return (<HeyMachine onHey={this.gotHey.bind(this)} />);
  }
};
```

As you can see in this example, `HeyMachine` expects to receive an `onHey` property. That property should be a function. Then, it listens to the `onClick` event from the `<button>`.

When an user clicks on the `<button>`, `HeyMachine.onClick` is invoked. There, `HeyMachine` invokes `this.props.onHey` that happens to be `App.gotHey`.

This is a great way for components to communicate with each other. Think of it as variation of the callback pattern that you learned in Node.js.

## Challenge!

For this challenge to make more sense, you should execute the tasks in order.

  1. Edit `BookForm.js` so that:
    1. `changeTitle` has an implementation where the state is mutated to reflect the new value of `title` (Hint: event.target.value);
    2. `changeRead` has an implementation where the state is mutated to reflect the new value of `read`;
    3. `addBook` invokes `props.onBook` with the current book.
  2. Edit `Book.js` so that `Book` has a method `toggleRead` that is invoked when the user clicks in the `<input>` checkbox;
  3. Review the code (in `index.js`, `BookForm.js` and `Book.js`) and observe how the data flows between components.

### Resources

* [Event System](https://facebook.github.io/react/docs/events.html)
* [DOM Event Listeners in a Component](https://facebook.github.io/react/tips/dom-event-listeners.html)
* [Communicate Between Components](https://facebook.github.io/react/tips/communicate-between-components.html)
