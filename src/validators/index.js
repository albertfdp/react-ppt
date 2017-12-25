export const validateProps = (propTypes, props) => {
  const knownProps = Object.keys(propTypes);

  Object.keys(props).forEach(key => {
    if (!knownProps.includes(key) && key !== 'children') {
      console.warn(`Unknown prop '${key}' passed. ${Object.keys(props)} />`);
    }
  });
};
