# react-ppt

> Create PowerPoint presentations with React using CSS and Flexbox layout

## Introduction

`react-ppt` is a library that lets you create PowerPoint presentations with React. It provides a set of low-level components which render your declarative slides and components to PowerPoint. It implements Facebook's [Yoga](https://github.com/facebook/yoga) layout engine, thus you can style the slides using `flexbox` instead of the traditional pptx libraries absolute positioning. It aims to support as much as possible `CSS` properties.

`react-ppt` wraps [PptxGenJS](https://github.com/gitbrent/PptxGenJS) library, so you can refer to its documentation for the details on specific props.

## Example

```js
import React from 'react';
import { render, Deck, Slide, Text } from 'react-ppt';

const App = () => (
  <Deck author="Me">
    <Slide
      style={{
        backgroundColor: '#e3b143'
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ color: "black" }}>Hello World</Text>
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

* Create a `.babelrc`

```json
{
  "presets": ["env", "react"]
}
```

After configuring [babel](https://github.com/babel/babel) you can run the example in [Example](#example).

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

### Slide

```js
<Slide
  number={{
    x: '30%'
    y: '50%',
    color: 'blue',
    fontFace: 'Comic Sans',
    fontSize: 10
  }}
  style={{
    backgroundColor: 'red',
    color: 'black',
    flexGrow: 1
  }}
/>
```

| Prop     | Type   | Default | Options                |
| :------- | :----- | :------ | :--------------------- |
| `number` | object |         | See below              |
| `style`  | object | {}      | See StyleSheet section |

`number` props:

| Prop       | Type             | Default | Examples                           |
| :--------- | :--------------- | :------ | :--------------------------------- |
| `x`        | string or number |         | `10`, `10%`                        |
| `y`        | string or number |         | `10`, `10%`                        |
| `color`    | string           |         | `#000000`, `black`, `rgb(0, 0, 0)` |
| `fontFace` | string           |         | `Comic Sans`                       |
| `fontSize` | number           |         | `10`                               |
