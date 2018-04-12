## Intro

At specific points of a component's lifecycle, various methods can be specified to hook into those events.

### Unmounting

  * `componentWillUnmount` is invoked immediately before a component instance is unmounted from the DOM.

`componentWillUnmount` is very useful to do some cleanup in your component, like cleaning timers, or cancelling async operations.

## Challenge!

  1. Notice the warning in the console. Use `componentWillUnmount` to fix it.

## Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
