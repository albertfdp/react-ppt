import render from './renderer/render';
import pptx from 'pptxgenjs';
import StyleSheet from './stylesheet';
import createElement from './utils/createElement';

const Chart = 'CHART';
const Deck = 'DECK';
const Image = 'IMAGE';
const Shape = 'SHAPE';
const Slide = 'SLIDE';
const Text = 'TEXT';

const LAYOUT = {
  '16x9': 'LAYOUT_16x9',
  '16x10': 'LAYOUT_16x10',
  '4x3': 'LAYOUT_4x3',
  WIDE: 'LAYOUT_WIDE'
};

export {
  Chart,
  createElement,
  Deck,
  Image,
  LAYOUT,
  render,
  Shape,
  Slide,
  StyleSheet,
  Text
};
