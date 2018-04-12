## Intro

To listen to events in your DOM element, you just need to pass a function to them:

```javascript
class Anchor extends React.Component {
  constructor() {
    super();
  }
  onClick(ev) {
    console.log(ev);
  }
  render() {
    return (<a onClick={this.onClick.bind(this)}></a>);
  }
};
```

React has support for a bunch of DOM events. You can check them in the [React documentation](https://facebook.github.io/react/docs/events.html)

### JavaScript `.bind`

When using classes and `this` in JavaScript, often we need to bind the functions to the class instance that we are dealing with.

For instance:

```javascript
const logThis = function() {
  console.log(this);
};

const logPerson = logThis.bind({
  name: 'Tom'
});

const logRobot = logThis.bind({
  energy: 20
});

logPerson(); // logs {name: 'Tom'}
logRobot(); // logs {name: 20}
```

In react we also need to either apply this technique or to wrap our event callback:

```javascript
class Anchor extends React.Component {
  constructor() {
    super();

    this.state = {
      visited: false
    };
  }
  clicked() {
    if (this.state.visited) {
      return;
    }

    this.setState({
      visited: true;
    });
  }
  render() {
    const visited = this.state.visited ? '' : ' (visited)';

    return (
      <a
        href='http://www.24i.com/'
        target='_blank'
        onClick={this.clicked.bind(this)}
      >
        24i${visited}
      </a>
    );
  }
}
```

```javascript
class Anchor extends React.Component {
  constructor() {
    super();

    this.state = {
      visited: false
    };
  }
  clicked() {
    if (this.state.visited) {
      return;
    }

    this.setState({
      visited: true
    });
  }
  render() {
    const visited = this.state.visited ? '' : ' (visited)';

    return (
      <a
        href='http://www.24i.com/'
        target='_blank'
        onClick={(ev) => this.clicked(ev)}
      >
        24i{visited}
      </a>
    );
  }
}
```

## Challenge!

Edit `index.js` so that:
  1. `HiddenMessage` button has an `onClick` method that toggles the `collapsed` state;
  2. `HiddenMessage` rendered `<button>` has an `onClick` handler that calls `this.onClick`,

### Resources

* [Event System](https://facebook.github.io/react/docs/events.html)
* [DOM Event Listeners in a Component](https://facebook.github.io/react/tips/dom-event-listeners.html)
