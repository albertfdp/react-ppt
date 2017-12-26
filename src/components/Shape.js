import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';
import { renderShape, renderTextShape } from '../utils/nodes';
import { normalize } from '../utils/colors';

class Shape extends Root {
  static propTypes = {
    placement: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      weight: PropTypes.number,
      height: PropTypes.number
    }),
    align: PropTypes.oneOf(['left', 'right', 'center']),
    fill: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        type: PropTypes.string,
        color: PropTypes.string,
        alpha: PropTypes.number
      })
    ]),
    flipH: PropTypes.bool,
    flipV: PropTypes.bool,
    line: PropTypes.string,
    lineDash: PropTypes.oneOf([
      'dash',
      'dashDot',
      'lgDash',
      'lgDashDot',
      'lgDashDotDot',
      'solid',
      'sysDash',
      'sysDot'
    ]),
    lineHead: PropTypes.oneOf([
      'arrow',
      'diamond',
      'oval',
      'stealth',
      'triangle',
      'none'
    ]),
    lineSize: PropTypes.number,
    lineTail: PropTypes.string,
    rectRadius: PropTypes.number,
    rotate: PropTypes.number,
    type: PropTypes.string
  };

  static defaultProps = {};

  constructor(root, props) {
    super(root, props, Shape.defaultProps);

    validateProps(Shape.propTypes, this.props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getType() {
    const { root: { pptx: { shapes } } } = this;
    const { type } = this.props;

    return shapes[type.toUpperCase()];
  }

  async render() {
    const { children } = this.props;

    if (typeof children === 'string') {
      await renderTextShape(
        children,
        this.getType(),
        this.getProps(),
        this.parent.slide
      );
    } else {
      await renderShape(this.getType(), this.getProps(), this.parent.slide);
    }
  }
}

export default Shape;
