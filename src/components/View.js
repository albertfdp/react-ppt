import Root from './Root';

class View extends Root {
  static defaultProps = {
    style: {}
  };

  async render() {
    await this.renderChildren();
  }
}

export default View;
