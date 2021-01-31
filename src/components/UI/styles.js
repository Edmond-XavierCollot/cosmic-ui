import { UI_PROPS, SPACING_PROPS_NATIVE_LIST } from "./props";

const spacingNativeHandlers = SPACING_PROPS_NATIVE_LIST.reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: (value) => ({
      [prop]: value,
    }),
  }),
  {}
);

const spacingHandlers = {
  ...spacingNativeHandlers,
  [UI_PROPS.MARGIN_HORIZONTAL]: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  [UI_PROPS.PADDING_HORIZONTAL]: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  [UI_PROPS.MARGIN_VERTICAL]: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
  [UI_PROPS.PADDING_VERTICAL]: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  [UI_PROPS.ALIGN]: (value) => ({
    alignItems: value,
  }),
  [UI_PROPS.JUSTIFY]: (value) => ({
    justifyContent: value,
  }),
};

const othersHandlers = {
  [UI_PROPS.ALIGN]: (value) => ({
    alignItems: value,
  }),
  [UI_PROPS.JUSTIFY]: (value) => ({
    justifyContent: value,
  }),
};

const stylesHandlers = {
  ...spacingHandlers,
  ...othersHandlers,
};

export const buildStylesTools = (spacing) => {
  const getSpacingValue = (value) => {
    if (typeof value === "string") {
      if (Object.keys(spacing).includes(value)) {
        return spacing[value];
      }
    }
    return value;
  };

  const wrappedHandlers = Object.entries(spacingHandlers).reduce(
    (acc, [name, handler]) => ({
      ...acc,
      [name]: (value) => handler(getSpacingValue(value)),
    })
  );

  const handlers = spacing
    ? { ...wrappedHandlers, ...othersHandlers }
    : stylesHandlers;

  const generateStyles = (props, htmlStyle) =>
    Object.entries(props).reduce(
      (acc, [prop, value]) => ({
        ...acc,
        ...handlers[prop](value),
      }),
      { ...htmlStyle }
    );

  return {
    generateStyles,
  };
};
