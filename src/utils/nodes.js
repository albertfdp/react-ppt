export const renderText = async (child, props, styles, instance) => {
  await instance.addText(child, props);
};

export const renderImage = async (props, instance) => {
  await instance.addImage(props);
};

export const renderChart = async (type, data, props, instance) => {
  await instance.addChart(type, data, props);
};

export const renderMultiTypeChart = async (typesAndData, props, instance) => {
  await instance.addChart(typesAndData, props);
};
