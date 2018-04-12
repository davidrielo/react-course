## Intro

React has a very strong emphasis on composition. You use components to form components. That has multiple advantages:
  * Reduce code duplication;
  * Create multiple layers of abstraction in your views;
  * Share code not only inside the same project, but also between different projects;
  * Encapsulate logic;

To distinguish between native DOM elements and React elements, there is a rule that all non-native elements names must be PascalCase.

const's exemplify this by having an `Alert` component that will be used by other component (`App`):

```js
class Alert extends React.Component {
  render() {
    const classNames = [
      'alert',
      'alert-' + this.props.type,
      'alert-dismissible'
    ].join(' ');

    return (<div className={classNames}>
      <span>{this.props.msg}</span>
    </div>);
  }
};

class App extends React.Component {
  render() {
    return (<div>
      <Alert type='info' msg='Is this going to work?' />
      <Alert type='success' msg='Well done!' />
    </div>)
  }
};
```

You see how we are instantiating `Alert` twice in `App.render`? Because JSX is transpiled into JavaScript and tags behave as variables, we can use the tools provided by JavaScript to programmatically instantiate both `Alert`s:

```js
class App extends React.Component {
  render() {
    const alerts = [{
      type: 'info',
      msg: 'Is this going to work?'
    }, {
      type: 'success',
      msg: 'Well done!'
    }];

    const tags = [];

    for (i in alerts) {
      tags[i] = (<Alert type={alerts[i].type} msg={alerts[i].msg} />);
    }

    return (<div>{tags}</div>);
  }
};
```

But we can make it even cleaner and better by using some functional ideas like mapping an `Array`:

```js
class App extends React.Component {
  render() {
    const alerts = [{
      type: 'info',
      msg: 'Is this going to work?'
    }, {
      type: 'success',
      msg: 'Well done!'
    }];

    const tags = alerts.map(function(alert) {
      return (<Alert type={alert.type} msg={alert.msg} />);
    });

    return (<div>{tags}</div>);
  }
};
```

## Challenge!

Knowing that you can have a grouped list in HTML:
```html
<ul className='list-group'>
  <li className='list-group-item'>Item 1</li>
  <li className='list-group-item'>Item 2</li>
  <li className='list-group-item'>...</li>
</ul>
```

And a list of topics:
```
[
  'Component',
  'Props',
  'Composition'
]
```

Edit `index.js` to:
  1. Have a `Topics` component that is going to instantiate a `List` component. The `Topics` component should pass the list of topics to the `List` component as a prop;
  2. Have a `List` component that receives a property named `items` (an array of topics) and renders a `list-group` with each item as a `list-group-item`;

### Resources

 * [Separation of Concerns](https://facebook.github.io/react/docs/multiple-components.html#motivation-separation-of-concerns)
