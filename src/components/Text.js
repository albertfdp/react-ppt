import Root from './Root';
import PropTypes from 'prop-types';
import Yoga from 'yoga-layout';

import { renderText } from '../utils/nodes';

class Text extends Root {
  static displayName = 'TEXT';

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
    autoFit: true,
    style: {}
  };

  constructor(root, props) {
    super(root, props);

    this.width = null;
    this.height = null;
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getStyle() {
    const { fontWeight, fontFace, fontSize, ...other } = this.style;

    return {
      bold: fontWeight === 'bold',
      font_face: fontFace,
      font_size: fontSize,
      ...other,
      ...super.getStyle()
    };
  }

  async renderChildren() {
    const padding = this.getComputedPadding();

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      const style = this.getStyle();
      console.log('Text.style', style);

      if (typeof child === 'string') {
        await renderText(child, this.getProps(), style, this.parent.slide);
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
