import expect from 'test/expect';

import React from 'react';
import { testRenderer as render } from '../renderer/render';
import { Slide } from '..';

describe('Slide', () => {
  it('renders', () => {
    expect(render(<Slide />), 'to match jest snapshot');
  });
});
