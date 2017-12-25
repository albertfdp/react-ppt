import React, { Component } from 'react';
import { render, Deck, Slide, Text } from '../src';

class App extends Component {
  render() {
    return (
      <Deck
        author="Albert"
        company="Foobar"
        revision="1"
        subject="React"
        title="react-pptx"
      >
        <Slide backgroundColor="#db3d3d" color="#ffffff">
          <Text bold color="#fffd06" fontSize={30} x="50%" y="50%">
            Hello, World!
          </Text>
        </Slide>
      </Deck>
    );
  }
}

render(<App />, `${__dirname}/example.pptx`);
