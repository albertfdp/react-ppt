import expect from 'test/expect';

import React from 'react';
import { testRenderer as render } from '../renderer/render';
import { Deck, Slide, Text } from '..';

describe('Deck', () => {
  it('renders', () => {
    expect(render(<Deck />), 'to match jest snapshot');
  });

  it('renders with props', () => {
    expect(
      render(
        <Deck
          author="Brent Ely"
          company="S.T.A.R. Laboratories"
          layout="LAYOUT_WIDE"
          revision={15}
          subject="Annual Report"
          title="Sample Presentation"
          dir="rtl"
        >
          <Slide>
            <Text color="red">Hello world</Text>
          </Slide>
        </Deck>
      ),
      'to match jest snapshot'
    );
  });

  it('renders the children components', () => {
    expect(
      render(
        <Deck>
          <Slide>
            <Text color="red">Hello world</Text>
          </Slide>
        </Deck>
      ),
      'to match jest snapshot'
    );
  });
});
