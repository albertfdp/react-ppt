import expect from 'test/expect';

import React from 'react';
import createElement from './createElement';

describe('createElement', () => {
  it('creates an element', () => {
    expect(createElement('ROOT'), 'to match jest snapshot');
  });
});
