import Root from './Root';
import { renderText } from '../utils/nodes';
import { normalize } from '../utils/colors';

class Text extends Root {
  static defaultProps = {
    x: 1.0,
    y: 1.0,
    align: 'left',
    autoFit: false,
    bold: false,
    breakLine: false,
    bullet: false
  };

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getPropName(prop) {
    const props = {
      fontSize: 'font_size'
    };

    return props[prop] || prop;
  }

  getTextProps() {
    const whitelist = ['color'];

    return Object.keys(this.props)
      .filter(key => whitelist.includes(key))
      .reduce((props, key) => {
        const propName = getPropName(key);
        props[propName] = this.props[propName] || defaultProps[propName];

        if (propName === 'color' || propName === 'fill') {
          props[propName] = normalize(props[propName]);
        }

        return props;
      }, {});
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
        // noop
      }
    }
  }

  async render() {
    await this.renderChildren();
  }
}

export default Text;
