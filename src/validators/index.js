import { Deck, Slide, Text } from '../components';

export const validateProps = (name, knownProps, props) => {
  Object.keys(props).forEach(key => {
    if (!knownProps.includes(key) && key !== 'children') {
      throw new Error(`Unknown prop '${key}' passed to <${name} />`);
    }
  });
};

export const validateDeckProps = props => {
  return validateProps('Deck', Object.keys(Deck.propTypes), props);
};

export const validateSlideProps = props => {
  return validateProps('Slide', Object.keys(Slide.propTypes), props);
};

export const validateTextProps = props => {
  return validateProps('Text', Object.keys(Text.propTypes), props);
};
