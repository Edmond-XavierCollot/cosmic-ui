import { UI_PROPS, SPACING_PROPS_NATIVE_LIST } from "./props";

const spacingHandlers = SPACING_PROPS_NATIVE_LIST.reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: (value) => ({
      [prop]: value,
    }),
  }),
  {}
);

export const stylesHandlers = {
  ...spacingHandlers,
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
