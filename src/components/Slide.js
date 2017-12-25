import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';
import { normalize } from '../utils/colors';

class Slide extends Root {
  static propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    number: PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      color: PropTypes.string,
      fontFace: PropTypes.string,
      fontSize: PropTypes.number
    })
  };

  static defaultProps = {
    backgroundColor: 'white',
    color: 'black'
  };

  constructor(root, props) {
    super(root, props, Slide.defaultProps);

    validateProps(Slide.propTypes, this.props);

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
