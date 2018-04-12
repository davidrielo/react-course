import test from 'ava';
import { render } from 'enzyme';
import React from 'react';

import Book from '../Book.js';

test('should have a checked checkbox', (t) => {
  const book = render(<Book read={true} />);
  t.deepEqual(book.find('input').attr('checked'), 'checked');
});

test('should toggle the checkbox when clicked', (t) => {
  t.pass();
});
