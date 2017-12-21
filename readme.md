```js
import React from 'react';
import { render, Deck, Slide, Text } from 'react-ppt';

const App = () => (
  <Deck author="Me">
    <Slide backgroundColor="#e3b143">
      <Text color="#000">Hello World</Text>
    </Slide>
  </Deck>
);

render(<App />, 'example.ppt');
```
