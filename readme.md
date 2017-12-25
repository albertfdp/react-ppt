# react-ppt

> Create PowerPoint presentations with React

## Introduction

`react-ppt` is a library that lets you create PowerPoint presentations with React. It provides a set of low-level components which render your declarative slides and components to PowerPoint.

## Example

```js
import React from 'react';
import { render, Deck, Slide, Text } from 'react-ppt';

const App = () => (
  <Deck author="Me">
    <Slide backgroundColor="#e3b143">
      <Text color="black">Hello World</Text>
    </Slide>
  </Deck>
);

render(<App />, 'example.ppt');
```

## Install

```bash
$ npm install --save react react-pptx
```

## Usage

width: number, height: number

* Create a `.babelrc`

```json
{
  "presets": ["env", "react"]
}
```

## Components

### Deck

```js
<Deck
  author="Author"
  company="Company"
  revision="10"
  subject="Deck"
  title="Presentation"
  dir="ltr"
  layout={{ name: 'Foo', width: 300, height: 200 }}
/>
```

| Prop       | Type             | Default | Options                                                                          |
| :--------- | :--------------- | :------ | :------------------------------------------------------------------------------- |
| `author`   | string           |         |                                                                                  |
| `company`  | string           |         |                                                                                  |
| `revision` | string           |         |                                                                                  |
| `subject`  | string           |         |                                                                                  |
| `title`    | string           |         |                                                                                  |
| `dir`      | string           | `ltr`   |                                                                                  |
| `layout`   | string or object | `16x9`  | `16x9`, `16x10`, `4x3`, `wide`, `{ name: string, width: number, height: number}` |

[More info](https://github.com/gitbrent/PptxGenJS/blob/master/README.md#presentation-properties)
