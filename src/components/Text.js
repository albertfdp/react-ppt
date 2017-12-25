import Root from './Root';
import PropTypes from 'prop-types';

import { validateTextProps } from '../validators';

import { renderText } from '../utils/nodes';
import { normalize } from '../utils/colors';

class Text extends Root {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number,
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

  static defaultProps = {};

  constructor(root, props) {
    super(root, props, Text.defaultProps);

    validateTextProps(this.props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getPropName(prop) {
    const props = {
      fontFace: 'font_face',
      fontSize: 'font_size'
    };

    return props[prop] || prop;
  }

  getTextProps() {
    const props = Object.keys(this.props)
      .filter(prop => prop !== 'children')
      .reduce((props, key) => {
        const propName = this.getPropName(key);
        props[propName] = this.props[key] || Text.defaultProps[key];

        if (propName === 'color' || propName === 'fill') {
          props[propName] = normalize(props[key]);
        }

        return props;
      }, {});

    return props;
  }

  async renderChildren() {
    for (let i = 0; i < this.children.length; i++) {
      if (typeof this.children[i] === 'string') {
        await renderText(
          this.children[i],
          this.getTextProps(),
          {},
          this.parent.slide
        );
      } else {
        throw new Error(
          `Children of Text can only be of type "string". Got ${typeof this
            .children[i]}`
        );
      }
    }
  }

  async render() {
    await this.renderChildren();
  }
}

export default Text;
