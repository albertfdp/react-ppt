import fs from 'fs';
import createElement from '../utils/createElement';
import { PowerPointRenderer } from './renderer';
import parse from './parse';

const render = async (element, pathname) => {
  const container = createElement('ROOT');
  const node = PowerPointRenderer.createContainer(container);

  PowerPointRenderer.updateContainer(element, node, null);

  const output = await parse(container).toBuffer();

  await new Promise((resolve, reject) => {
    output.pptx.save(pathname, () => {
      resolve();
    });
  });
};

export const testRenderer = element => {
  const container = createElement('ROOT');
  const node = PowerPointRenderer.createContainer(container);

  PowerPointRenderer.updateContainer(element, node, null);

  return container;
};

export default render;
