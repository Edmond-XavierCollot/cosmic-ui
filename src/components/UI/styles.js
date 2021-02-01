import { parseSpacingValue } from "../../utils";
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
};

const othersHandlers = {
  [UI_PROPS.ALIGN]: (value) => ({
    alignItems: value,
  }),
  [UI_PROPS.JUSTIFY]: (value) => ({
    justifyContent: value,
  }),
};

const wrappedHandlers = Object.entries(spacingHandlers).reduce(
  (acc, [name, handler]) => ({
    ...acc,
    [name]: (value) => handler(parseSpacingValue(value)),
  }),
  {}
);

const handlers = { ...wrappedHandlers, ...othersHandlers };

export const generateStyles = (props) =>
  Object.entries(props).reduce(
    (acc, [prop, value]) => ({
      ...acc,
      ...handlers[prop](value),
    }),
    {}
  );
