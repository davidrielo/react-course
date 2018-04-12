## Intro

A good and common practice in the development world is to have reproducible and programatic tests so that we are able to make changes to our code with confidence that we are not creating new bugs.

There are a lot of tools to help with that. One of them was built by Airbnb:

### Enzyme

[Enzyme](http://airbnb.io/enzyme/) helps you manipulate and traverse your components output.

```js
import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';

test('<MyComponent />', t => {
  const wrapper = shallow(<MyComponent />);
  t.equal(wrapper.find(Foo).length, 3);
});
```

#### [`shallow`](http://airbnb.io/enzyme/docs/api/shallow.html)

> Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

#### [`mount`](http://airbnb.io/enzyme/docs/api/mount.html)

> Full DOM rendering is ideal for use cases where you have components that may interact with DOM apis, or may require the full lifecycle in order to fully test the component (ie, componentDidMount etc.)

```js
import { mount } from 'enzyme';

spy(Foo.prototype, 'componentDidMount');
const wrapper = mount(<Foo />);
t.equal(Foo.prototype.componentDidMount.calledOnce, true);
```

#### [`render`](http://airbnb.io/enzyme/docs/api/render.html)

> Render function is used to render react components to static HTML and analyze the resulting HTML structure.

```js
const wrapper = render(<Foo />);
t.equal(wrapper.find('.foo-bar'), 3);
```

## Challenge!

Remember the Books example? Review the code!

Edit the files in `tests` and write the tests according to the description of each one.

To run the tests you just need to execute `npm test`;

### Resources

* [enzyme](http://airbnb.io/enzyme/)
