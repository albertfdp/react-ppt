const parse = input => {
  const parseComponent = async inputComponent => {
    const { slide } = inputComponent;

    await slide.render();

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
