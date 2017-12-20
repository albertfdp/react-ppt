import Root from './Root';

class Slide extends Root {
  constructor(root, props) {
    super(root, props);

    this.root = root;
    this.props = props;
    this.children = [];

    // create a new slide
    this.adder = this.root.pptx.addNewSlide();
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  renderChildren() {
    this.children.forEach(child => {
      if (typeof child === 'string') {
        this.adder.addText(child);
      } else if (typeof child === 'object') {
        child.render();
      }
    });
  }

  render() {
    this.renderChildren();
  }
}

export default Slide;
