import Root from './Root';
import PropTypes from 'prop-types';

import { validateSlideProps } from '../validators';
import { normalize } from '../utils/colors';

export const SLIDE_PROPERTIES = ['backgroundColor', 'color'];

class Slide extends Root {
  static propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string
  };

  static defaultProps = {
    backgroundColor: '#ffffff',
    color: '#000000'
  };

  constructor(root, props) {
    super(root, props);

    validateSlideProps(this.props);

    // create a new slide
    this.slide = this.root.pptx.addNewSlide();
  }

  setStyles(props) {
    const { backgroundColor, color } = props;

    this.slide.back = normalize(backgroundColor);
    this.slide.color = normalize(color);
  }

  async render() {
    this.setStyles(this.props);
    await this.renderChildren();
  }
}

export default Slide;
