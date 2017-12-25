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

  getProps() {
    return this.props;
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
