import config from "../config";

export const divideProps = (props, divideRules) => {
  let result = {};
  const rulesKeys = Object.keys(divideRules);

  Object.entries(props).forEach(([prop, value]) => {
    const rule =
      rulesKeys.find((name) => divideRules[name].includes(prop)) ||
      "otherProps";

    if (!result[rule]) {
      result[rule] = {};
    }
    result[rule][prop] = value;
  });
  return result;
};

export const parseSpacingValue = (value) => {
  const spacing = config.spacing;

  if (typeof value === "string") {
    if (Object.keys(spacing).includes(value)) {
      return spacing[value];
    }
  }
  return value;
};
