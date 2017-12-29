import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';

import { renderText } from '../utils/nodes';

class Text extends Root {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    autoFit: PropTypes.bool,
    bold: PropTypes.bool,
    breakLine: PropTypes.bool,
    bullet: PropTypes.oneOfType([
      PropTypes.shape({ type: PropTypes.number }),
      PropTypes.shape({ code: PropTypes.string })
    ]),
    color: PropTypes.string,
    children: PropTypes.node,
    fill: PropTypes.string,
    fontFace: PropTypes.string,
    fontSize: PropTypes.number,
    hyperlink: PropTypes.string,
    indentLevel: PropTypes.number,
    inset: PropTypes.number,
    isTextBox: PropTypes.bool,
    italic: PropTypes.bool,
    lang: PropTypes.string,
    lineSpacing: PropTypes.number,
    margin: PropTypes.number,
    rectRadius: PropTypes.number,
    rotate: PropTypes.number,
    rtlMode: PropTypes.bool,
    shadow: PropTypes.shape({
      type: PropTypes.string,
      angle: PropTypes.number,
      blur: PropTypes.number,
      color: PropTypes.string,
      offset: PropTypes.number,
      opacity: PropTypes.number
    }),
    strike: PropTypes.bool,
    style: PropTypes.object,
    subscript: PropTypes.bool,
    superscript: PropTypes.bool,
    underline: PropTypes.bool,
    valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    vert: PropTypes.oneOf([
      'eaVert',
      'horz',
      'mongolianVert',
      'vert',
      'ver270',
      'wordArtVert',
      'wordArtVertRtl'
    ])
  };

  static defaultProps = {
    style: {}
  };

  constructor(root, props) {
    super(root, props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getTextStyles() {
    const {
      fontWeight,
      fontFace,
      fontSize,
      top,
      left,
      width,
      height
    } = this.style;

    return {
      bold: fontWeight === 'bold',
      font_face: fontFace,
      font_size: fontSize,
      x: left,
      y: top,
      w: width,
      h: height
    };
  }

  async renderChildren() {
    const padding = this.getComputedPadding();
    const { left, top, width, height } = this.getAbsoluteLayout();
    console.log('Text.render', padding, this.getAbsoluteLayout());

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      if (typeof child === 'string') {
        await renderText(
          child,
          this.getProps(),
          this.getTextStyles(),
          this.parent.slide
        );
      } else {
        throw new Error(
          `Children of Text can only be of type "string". Got ${typeof child}`
        );
      }
    }
  }

  async render() {
    await this.renderChildren();
  }
}

export default Text;
