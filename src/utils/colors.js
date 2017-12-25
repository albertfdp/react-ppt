const parseColor = require('parse-color');

export const normalize = str => {
  const color = parseColor(str);

  return color.hex.toUpperCase().replace('#', '');
};
