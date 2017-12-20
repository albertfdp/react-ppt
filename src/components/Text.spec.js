import expect from 'test/expect';

import React from 'react';
import { testRenderer as render } from '../renderer/render';
import { Text } from '..';

describe('Text', () => {
  it('renders', () => {
    const App = () => <Text>Hello world</Text>;

    expect(render(<App />), 'to match jest snapshot');
  });
});
