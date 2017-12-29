import Yoga from 'yoga-layout';
import StyleSheet from '../stylesheet';
import { normalize } from '../utils/colors';

const COLOR_PROPS = ['color', 'fill', 'line'];

const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

class Root {
  static defaultProps = {
    style: {}
  };

  constructor(root, props) {
    this.parent = null;
    this.children = [];

    this.root = root;

    this.props = {
      ...Root.defaultProps,
      ...this.constructor.defaultProps,
      ...props
    };

    this.style = StyleSheet.resolve(this.props.style);
    this.layout = Yoga.Node.createDefault();

    if (this.props) {
      this.applyProps(this.props);
    }
  }

  applyProps(props) {
    if (this.style) {
      Object.entries(this.style).map(([attr, value]) => {
        this.applyStyle(attr, value);
      });
    }
  }

  applyStyle(attribute, value) {
    const setter = `set${upperFirst(attribute)}`;

    switch (attribute) {
      case 'position': {
        const positionType =
          value === 'absolute'
            ? Yoga.POSITION_TYPE_ABSOLUTE
            : Yoga.POSITION_TYPE_RELATIVE;

        this.layout.setPositionType(positionType);
        break;
      }
      default: {
        if (typeof this.layout[setter] === 'function') {
          this.layout[setter](value);
        }
      }
    }
  }

  getAbsoluteLayout() {
    const layout = this.layout.getComputedLayout();

    const parentLayout =
      this.parent && this.parent.getAbsoluteLayout
        ? this.parent.getAbsoluteLayout()
        : { left: 0, top: 0 };

    return {
      left: layout.left + parentLayout.left,
      top: layout.top + parentLayout.top,
      height: layout.height,
      width: layout.width
    };
  }

  getComputedPadding() {
    return {
      top: this.layout.getComputedPadding(Yoga.EDGE_TOP),
      right: this.layout.getComputedPadding(Yoga.EDGE_RIGHT),
      bottom: this.layout.getComputedPadding(Yoga.EDGE_BOTTOM),
      left: this.layout.getComputedPadding(Yoga.EDGE_LEFT)
    };
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
      .filter(
        prop => prop !== 'children' && prop !== 'data' && prop !== 'style'
      )
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

  getStyle() {
    const { top, left, height, width } = this.style;

    return {
      x: left,
      y: top,
      w: width,
      h: height
    };
  }

  appendChild(child) {
    child.parent = this;
    this.children.push(child);
    this.layout.insertChild(child.layout, this.layout.getChildCount());
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    child.parent = null;
    this.children.splice(index, 1);
    this.layout.removeChild(child.layout, index);
  }

  async renderChildren() {
    for (let i = 0; i < this.children.length; i++) {
      await this.children[i].render();
    }
  }
}

export default Root;
