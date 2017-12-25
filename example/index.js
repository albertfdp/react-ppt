import React, { Component } from 'react';
import { render, Deck, Slide, Text, Image, LAYOUT } from '../src';

class App extends Component {
  render() {
    return (
      <Deck
        author="Albert"
        company="Foobar"
        revision="1"
        subject="React"
        title="react-pptx"
        layout={LAYOUT.WIDE}
      >
        <Slide backgroundColor="#db3d3d" color="#ffffff">
          <Text
            fontFace="Comic Sans"
            bold
            color="#fffd06"
            fontSize={30}
            x="5%"
            y="10%"
          >
            Hello, World!
          </Text>
          <Image
            path="./example/logo.png"
            x="30%"
            y="50%"
            hyperlink={{
              url: 'https://reactjs.org/',
              tooltip: 'React.js'
            }}
          />
        </Slide>
      </Deck>
    );
  }
}

render(<App />, `${__dirname}/example.pptx`);
