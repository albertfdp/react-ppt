import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';
import { normalize } from '../utils/colors';
import { emu2px } from '../utils/measures';

class Slide extends Root {
  static displayName = 'SLIDE';

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

  getSize() {
    const { width, height } = this.root.pptx.getLayout();

    return {
      height: emu2px(height),
      width: emu2px(width)
    };
  }

  applyProps(props) {
    super.applyProps(props);

    const { height, width } = this.getSize();
    this.layout.setWidth(width);
    this.layout.setHeight(height);
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

    // Text needs its parent layout
    // this.layout.calculateLayout();

    // Then ask each children to recalculate its layout
    // await this.recalculateLayout();

    // recalculate
    this.layout.calculateLayout();

    await this.renderChildren();
  }
}

export default Slide;
