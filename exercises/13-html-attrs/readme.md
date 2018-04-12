## Intro

### HTML attributes

Because **JSX** is transpiled into JavaScript and some HTML attributes conflict with reserved JavaScript keywords, they have to be renamed:
  * `className` should be used instead of `class`
  * `htmlFor` should be used instead of `for`

### Styles

When you want to inline a style, rather than using a `CSS` class, you declare styles in plain JavaScript object.

For instance:

```js
class MyStyle extends React.Component {
  render() {
    const divStyle = {
      color: 'white',
      backgroundColor: 'black',
      width: 100
    };

    return (<div style={divStyle}>Hello World!</div>);
  }
};
```

Will be rendered as:

```html
<div style="color:white;background-color:black;width:100px;">Hello World!</div>
```

As you can notice, all style keys are declared in camelCase and when appropriate numbers are appended with `px`.

If you want to go the inline styles route, we would advise you to use an external library like [Radium](http://projects.formidablelabs.com/radium/) to manage them.

### Class Names

In one of the previous examples (exercise 04), you may remember seeing a snippet of code like this:

```js
const classNames = [
  'alert',
  'alert-' + this.props.type,
  'alert-dismissible'
].join(' ');
```

Managing dynamic class names like this can get annoying and significantly increases the clutter in the code. To prevent that you can use `React.addons.classSet` to conditionally toggle class names:

```js
const classNames = React.addons.classSet({
  'alert': true,
  'alert-info': this.props.type === 'info',
  'alert-dismissible': true
});
```

Please note though that this addon is going to be deprecated in the future as it was detached from React into an [independent module](https://github.com/JedWatson/classnames).

## Challenge!

Edit `GuestList.js` so that:

  1. `<label>`'s have a `for` attribute that matches the `id` that it refers to;
  2. The `<button>` to add guests has a `green` background color when `name` and `brings` are not empty. Use inline styles for that.

### Resources
 * [Class Name Manipulation](https://facebook.github.io/react/docs/class-name-manipulation.html)
 * [Inline Styles](https://facebook.github.io/react/tips/inline-styles.html)
 * [Shorthand for Specifying Pixel Values in style props](https://facebook.github.io/react/tips/style-props-value-px.html)
 * [Tags and Attributes](https://facebook.github.io/react/docs/tags-and-attributes.html#supported-attributes)
