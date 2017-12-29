import Root from './Root';
import PropTypes from 'prop-types';

import { renderImage } from '../utils/nodes';

class Image extends Root {
  static propTypes = {
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
    }),
    style: PropTypes.object
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

  async render() {
    await renderImage(
      { ...this.getProps(), ...this.getStyle() },
      this.parent.slide
    );
  }
}

export default Image;
