class Root {
  constructor(root, props) {
    this.root = root;
    this.props = props;

    this.parent = null;
    this.children = [];
  }

  appendChild(child) {
    child.parent = this;
    // console.log('appendChild', child);
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
