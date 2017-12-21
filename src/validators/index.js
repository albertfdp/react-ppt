import { DECK_PROPERTIES } from '../components/Deck';
import { SLIDE_PROPERTIES } from '../components/Slide';

export const validateProps = (name, knownProps, props) => {
  Object.keys(props).forEach(key => {
    if (!knownProps.includes(key) && key !== 'children') {
      throw new Error(`Unknown prop '${key}' passed to <${name} />`);
    }
  });
};

export const validateDeckProps = props => {
  return validateProps('Deck', [...DECK_PROPERTIES], props);
};

export const validateSlideProps = props => {
  return validateProps('Slide', [...SLIDE_PROPERTIES], props);
};
