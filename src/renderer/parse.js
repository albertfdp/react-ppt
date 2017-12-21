const parse = input => {
  const parseComponent = async inputComponent => {
    const { deck } = inputComponent;

    await deck.render();

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
