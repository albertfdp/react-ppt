import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';
import { normalize } from '../utils/colors';

class Slide extends Root {
  static propTypes = {
    number: PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      color: PropTypes.string,
      fontFace: PropTypes.string,
      fontSize: PropTypes.number
    }),
    style: PropTypes.object
  };

  static defaultProps = {
    style: {
      backgroundColor: 'white',
      color: 'black'
    }
  };

  constructor(root, props) {
    super(root, props);

    this.slide = this.root.pptx.addNewSlide();
  }

  setStyles() {
    const { backgroundColor, color } = this.style;

    if (backgroundColor) {
      this.slide.back = backgroundColor;
    }
    if (color) {
      this.slide.color = color;
    }
  }

  async render() {
    this.setStyles();

    await this.renderChildren();
  }
}

export default Slide;
