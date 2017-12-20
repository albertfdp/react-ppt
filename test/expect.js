import unexpected from 'unexpected';

const jestExpect = global.expect;

export default unexpected
  .clone()
  .addAssertion('<any> to match jest snapshot', (expect, subject) => {
    jestExpect(subject).toMatchSnapshot();
  });
