import Root from './Root';
import PropTypes from 'prop-types';

import { validateSlideProps } from '../validators';
import { normalize } from '../utils/colors';

import yoga, { Node } from 'yoga-layout';

export const SLIDE_PROPERTIES = ['backgroundColor', 'color'];

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
    }),
    width: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    backgroundColor: '#ffffff',
    color: '#000000'
  };

  constructor(root, props) {
    super(root, props, Slide.defaultProps);

    validateSlideProps(this.props);

    // create a new slide
    this.slide = this.root.pptx.addNewSlide();

    this.rootNode = Node.create();
    this.rootNode.setWidth(this.props.width);
    this.rootNode.setHeight(this.props.height);
    this.rootNode.setPadding(yoga.EDGE_ALL, 20);
    this.rootNode.setDisplay(yoga.DISPLAY_FLEX);
    this.rootNode.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
  }

  setStyles(props) {
    const { backgroundColor, color } = props;

    this.slide.back = normalize(backgroundColor);
    this.slide.color = normalize(color);
  }

  calculateLayout() {
    const { dir, height, width } = this.props;
    const yogaDir = dir === 'rtl' ? yoga.DIRECTION_LTR : yoga.DIRECTION_RTL;

    return this.rootNode.calculateLayout(width, height, yogaDir);
  }

  async render() {
    this.setStyles(this.props);
    const layout = this.calculateLayout();
    console.log('Layout:', layout);

    await this.renderChildren();
  }
}

export default Slide;
