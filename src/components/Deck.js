import PropTypes from 'prop-types';

import Root from './Root';
import { validateDeckProps } from '../validators';

import yoga from 'yoga-layout';

class Deck extends Root {
  static propTypes = {
    author: PropTypes.string,
    children: PropTypes.node,
    company: PropTypes.string,
    revision: PropTypes.string,
    subject: PropTypes.string,
    title: PropTypes.string,
    dir: PropTypes.string
  };

  static defaultProps = {
    dir: 'ltr'
  };

  constructor(root, props) {
    super(root, props, Deck.defaultProps);

    validateDeckProps(this.props);
  }

  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  setProperties(props) {
    const knownProps = Object.keys(Deck.propTypes).filter(
      prop => !['dir', 'height', 'width', 'children'].includes(prop)
    );

    Object.keys(props)
      .filter(prop => knownProps.includes(prop))
      .map(key => {
        const method = `set${this._capitalize(key)}`;
        const value = props[key];

        this.root.pptx[method].call(this.root.pptx, value);
      });

    if (props.dir === 'rtl') {
      this.root.pptx.setRTL(true);
    }
  }

  async render() {
    this.setProperties(this.props);

    await this.renderChildren();
  }
}

export default Deck;
