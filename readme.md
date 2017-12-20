```js
import React from 'react';
import { render, Deck, Slide, Text } from 'react-ppt';

const App = () => (
  <Deck>
    <Slide>
      <Text>Hello World</Text>
    </Slide>
  </Deck>
);

render(<App />, 'example.ppt');
```
