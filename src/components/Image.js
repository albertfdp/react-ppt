import Root from './Root';
import PropTypes from 'prop-types';

import { validateProps } from '../validators';
import { renderImage } from '../utils/nodes';

class Image extends Root {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number,
    hyperlink: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string,
        tooltip: PropTypes.string
      })
    ]),
    data: PropTypes.string,
    path: PropTypes.string,
    sizing: PropTypes.shape({
      type: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
      w: PropTypes.number,
      h: PropTypes.number
    })
  };

  static defaultProps = {};

  constructor(root, props) {
    super(root, props, Image.defaultProps);

    validateProps(Image.propTypes, this.props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = null;
  }

  getProps() {
    const props = Object.keys(this.props)
      .filter(prop => prop !== 'children')
      .reduce((props, key) => {
        props[key] = this.props[key] || Image.defaultProps[key];

        return props;
      }, {});

    return props;
  }

  async render() {
    await renderImage(this.getProps(), this.parent.slide);
  }
}

export default Image;
