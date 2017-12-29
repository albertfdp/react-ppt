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
        <Slide style={{ backgroundColor: 'hotpink', color: 'white' }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 60,
              fontWeight: 'bold',
              top: '10%',
              left: '25%'
            }}
          >
            Hello, World!
          </Text>
          <Image
            path={path.join(__dirname, './logo.png')}
            style={{ left: '30%', top: '50%' }}
            hyperlink={{
              url: 'https://reactjs.org/',
              tooltip: 'React.js'
            }}
          />
        </Slide>
        <Slide>
          <Chart
            type="line"
            style={{ left: '70%', top: '70%', width: 12, height: 6 }}
            data={[
              {
                name: 'Region 1',
                labels: ['May', 'June', 'July', 'August'],
                values: [26, 53, 100, 75]
              },
              {
                name: 'Region 2',
                labels: ['May', 'June', 'July', 'August'],
                values: [43.5, 70.3, 90.1, 80.05]
              }
            ]}
          />
        </Slide>
        <Slide>
          <Shape
            type="right_triangle"
            style={{
              top: 4.3,
              left: 0.4,
              width: 6,
              height: 3
            }}
            align="center"
            fill="#0088cc"
            line="#ff0000"
            lineSize={3}
          >
            Right triangle
          </Shape>
        </Slide>
      </Deck>
    );
  }
}

render(<App />, `${__dirname}/example.pptx`);
