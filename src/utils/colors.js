const parseColor = require('parse-color');

export const normalize = str => {
  const color = parseColor(str);

  return color && color.hex.toUpperCase().replace('#', '');
};
