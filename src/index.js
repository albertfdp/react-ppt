import render from './renderer/render';
import pptx from 'pptxgenjs';

const Deck = 'DECK';
const Slide = 'SLIDE';
const Text = 'TEXT';
const Image = 'IMAGE';
const Chart = 'CHART';
const Shape = 'SHAPE';

const LAYOUT = {
  '16x9': 'LAYOUT_16x9',
  '16x10': 'LAYOUT_16x10',
  '4x3': 'LAYOUT_4x3',
  WIDE: 'LAYOUT_WIDE'
};

export { Deck, Slide, Chart, Shape, Text, Image, render, LAYOUT };
