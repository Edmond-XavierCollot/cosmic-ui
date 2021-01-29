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
