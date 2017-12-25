export const renderText = async (child, props, styles, instance) => {
  await instance.addText(child, props);
};

export const renderImage = async (props, instance) => {
  await instance.addImage(props);
};
