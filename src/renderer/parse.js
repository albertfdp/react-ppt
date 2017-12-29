const parse = input => {
  const parseComponent = async inputComponent => {
    const { document } = inputComponent;

    await document.render();

    return inputComponent;
  };

  const toBuffer = async () => {
    return await parseComponent(input);
  };

  return {
    toBuffer
  };
};

export default parse;
