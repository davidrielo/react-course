## Intro

A component is a class that encapsulates your view and your logic associated with that view. In a typical MVC framework you have a template and some sort of view-controller, in React each component couples those into one.

### Component

To create a component you just need to create a React class. That class is eventually going to be instantiated, but let's not worry about that now.

```javascript
class Anchor extends React.Component {
  render() {
    return (<a href='http://www.24i.com/'></a>);
  }
};
```

Here we are creating a component named `Anchor`, that will render an anchor tag with an `href` that points to the *24i* website.

You might find this syntax odd: we are mixing HTML with JavaScript.

#### ES5 vs ES2015

React supports ES2015 (as shown in the previous example), but you can write code in the good old ES5:

```js
const Anchor = React.createClass({
  render: function() {
    return (<a href='http://www.24i.com/'></a>);
  }
});
```

Although our future code snippets are going to be in ES2015, you can use both interchangeably.

### JSX

**JSX** is a small layer on top of JavaScript that allows you to inline HTML in your code. Think of a tag as a variable in JavaScript - and that's what actually happens when you transpile JSX into JavaScript:

```javascript
class Anchor extends React.Component {
  render() {
    return (React.createElement('a', {
      href: 'http://www.24i.com/'
    }));
  }
};
```

## Challenge!

 1. Create your first component (`HelloWorld`); (index.js)
 2. Have that component render an `h1` tag with the text "Hello 24i";

### Resources

 * [Your first component](https://facebook.github.io/react/docs/tutorial.html#your-first-component)
