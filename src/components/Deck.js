import PropTypes from 'prop-types';

import Root from './Root';
import { emu2px } from '../utils/measures';

class Deck extends Root {
  static propTypes = {
    author: PropTypes.string,
    children: PropTypes.node,
    company: PropTypes.string,
    revision: PropTypes.string,
    subject: PropTypes.string,
    title: PropTypes.string,
    dir: PropTypes.string,
    layout: PropTypes.oneOfType([
      PropTypes.oneOf(['16x9', '16x10', '4x3', 'wide']),
      PropTypes.shape({
        name: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
      })
    ])
  };

  static defaultProps = {
    dir: 'ltr',
    layout: 'LAYOUT_16x9'
  };

  addMetadata() {
    const { author, company, revision, subject, title, dir } = this.props;

    if (author) {
      this.root.pptx.setAuthor(author);
    }

    if (company) {
      this.root.pptx.setCompany(company);
    }

    if (revision) {
      this.root.pptx.setRevision(revision);
    }

    if (subject) {
      this.root.pptx.setSubject(subject);
    }

    if (title) {
      this.root.pptx.setTitle(title);
    }

    if (dir && dir === 'rtl') {
      this.root.pptx.setRTL(true);
    }
  }

  async render() {
    this.addMetadata();

    await this.renderChildren();
  }
}

export default Deck;
