import Root from './Root';
import { validateDeckProps } from '../validators';

export const DECK_PROPERTIES = [
  'author',
  'company',
  'revision',
  'subject',
  'title'
];

class Deck extends Root {
  static propTypes = {
    author: PropTypes.string,
    children: PropTypes.node,
    company: PropTypes.string,
    revision: PropTypes.string,
    subject: PropTypes.string,
    title: PropTypes.string
  };

  constructor(root, props) {
    super(root, props);

    this.root = root;
    this.props = props;

    this.children = [];

    validateDeckProps(this.props);
  }

  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  setProperties(props) {
    Object.keys(props)
      .filter(prop => DECK_PROPERTIES.includes(prop))
      .map(key => {
        const method = `set${this._capitalize(key)}`;
        const value = props[key];

        this.root.pptx[method].call(this.root.pptx, value);
      });

    if (props.rtl) {
      this.root.pptx.setRTL(true);
    }
  }

  async render() {
    this.setProperties(this.props);

    await this.renderChildren();
  }
}

export default Deck;
