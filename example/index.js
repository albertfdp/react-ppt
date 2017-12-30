import React, { Component } from 'react';
import { render, Deck, Chart, Slide, Shape, Text, Image, LAYOUT } from '../src';
import path from 'path';

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
        layout={LAYOUT.WIDE}
      >
        <Slide
          style={{
            backgroundColor: 'tomato',
            color: 'white',
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderColor: 'blue',
            height: '100%',
            width: '100%'
          }}
        >
          <Text
            style={{
              flex: 1,
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 60,
              fontWeight: 'bold',
              fill: 'blue',
              maxWidth: '30%'
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              flex: 1,
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 60,
              fontWeight: 'bold',
              maxWidth: '20%',
              fill: 'red'
            }}
          >
            World!
          </Text>
        </Slide>
      </Deck>
    );
  }
}

render(<App />, `${__dirname}/example.pptx`);
