import transformStyles from './transformStyles';

export const create = styles => styles;

export const flatten = input => {
  if (!Array.isArray(input)) {
    input = [input];
  }

  return input.reduce((acc, style) => {
    if (style) {
      Object.keys(style).forEach(key => {
        if (style[key]) {
          acc[key] = style[key];
        }
      });
    }

    return acc;
  }, {});
};

export const resolve = styles => {
  return styles ? flatten(transformStyles(styles)) : null;
};

const StyleSheet = {
  create,
  resolve
};

export default StyleSheet;
