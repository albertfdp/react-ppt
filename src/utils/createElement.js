import { PowerPoint, Deck, Chart, Text, Slide, Image } from '../components';

let ROOT_NODE_INSTANCE = null;

export const getHostContextNode = rootNode => {
  if (typeof rootNode !== 'undefined') {
    ROOT_NODE_INSTANCE = rootNode;
    return ROOT_NODE_INSTANCE;
  } else {
    console.warn(`${rootNode} is not an instance of pptxgen constructor.`);

    ROOT_NODE_INSTANCE = new PowerPoint();
    return ROOT_NODE_INSTANCE;
  }
};

const createElement = (type, props) => {
  const COMPONENTS = {
    ROOT: () => new PowerPoint(),

    DECK: () => new Deck(ROOT_NODE_INSTANCE, props),

    CHART: () => new Chart(ROOT_NODE_INSTANCE, props),
    IMAGE: () => new Image(ROOT_NODE_INSTANCE, props),
    TEXT: () => new Text(ROOT_NODE_INSTANCE, props),
    SLIDE: () => new Slide(ROOT_NODE_INSTANCE, props),
    default: undefined
  };

  return COMPONENTS[type]() || COMPONENTS.default;
};

export default createElement;
