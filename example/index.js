import React, { Component } from 'react';
import { render, Deck, Slide, Text } from '../src';

class App extends Component {
  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    return (
      <Deck
        author="Albert"
        company="Foobar"
        revision="1"
        subject="React"
        title="react-pptx"
      >
        <Slide>
          <Text>Hello</Text>
        </Slide>
      </Deck>
    );
  }
}

render(<App />, `${__dirname}/example.pptx`);
