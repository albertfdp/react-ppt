import { normalize } from '../utils/colors';

const COLOR_PROPS = ['color', 'fill', 'line'];

class Root {
  getInitialProps(props, defaultProps) {
    return {
      ...defaultProps,
      ...props
    };
  }

  constructor(root, props, defaultProps = {}) {
    this.root = root;
    this.props = this.getInitialProps(props, defaultProps);

    this.parent = null;
    this.children = [];
  }

  getPropName(prop) {
    const props = {
      fontFace: 'font_face',
      fontSize: 'font_size',
      height: 'h',
      width: 'w',
      lineDash: 'line_dash',
      lineHead: 'line_head',
      lineTail: 'line_tail'
    };

    return props[prop] || prop;
  }

  getProps() {
    return Object.keys(this.props)
      .filter(prop => prop !== 'children' && prop !== 'data')
      .reduce((props, key) => {
        const propName = this.getPropName(key);
        let value = this.props[key];

        if (COLOR_PROPS.includes(propName)) {
          props[propName] = normalize(value);
        } else if (propName === 'placement') {
          Object.keys(value).forEach(prop => {
            const placementProp = this.getPropName(prop);

            props[placementProp] = this.props.placement[prop];
          });
        } else {
          props[propName] = value;
        }

        return props;
      }, {});
  }

  appendChild(child) {
    child.parent = this;

    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    child.parent = null;
    this.children.splice(index, 1);
  }

  async renderChildren() {
    for (let i = 0; i < this.children.length; i++) {
      await this.children[i].render();
    }
  }
}

export default Root;
