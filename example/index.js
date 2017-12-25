import React, { Component } from 'react';
import { render, Deck, Chart, Slide, Text, Image, LAYOUT } from '../src';
import path from 'path';

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
        <Slide backgroundColor="cyan" color="blue">
          <Text
            fontFace="Comic Sans"
            bold
            color="hotpink"
            fontSize={30}
            x="5%"
            y="10%"
          >
            Hello, World!
          </Text>
          <Image
            path={path.join(__dirname, './logo.png')}
            x="30%"
            y="50%"
            hyperlink={{
              url: 'https://reactjs.org/',
              tooltip: 'React.js'
            }}
          />
        </Slide>
        <Slide>
          <Chart
            type="line"
            x="70%"
            y="70%"
            w={12}
            h={6}
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
      </Deck>
    );
  }
}

render(<App />, `${__dirname}/example.pptx`);
