import Root from './Root';

export const DECK_PROPERTIES = [
  'author',
  'company',
  'revision',
  'subject',
  'title'
];

class Deck extends Root {
  constructor(root, props) {
    super(root, props);

    this.root = root;
    this.props = props;

    this.children = [];

    this.applyProperties();
  }

  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  applyProperties() {
    Object.keys(this.props)
      .filter(prop => DECK_PROPERTIES.includes(prop))
      .map(key => {
        const method = `set${this._capitalize(key)}`;
        const value = this.props[key];

        this.root.pptx[method].call(this.root.pptx, value);
      });
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    this.children.splice(index, 1);
  }

  async renderChildren() {
    this.children.forEach(async child => {
      if (typeof child === 'string') {
        throw new Error('Yo');
      } else if (typeof child === 'object') {
        await child.render();
      }
    });
  }

  async render() {
    await this.renderChildren();
  }
}

export default Deck;
