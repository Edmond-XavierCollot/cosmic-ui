export const SPACING_PROPS_NATIVE = {
  MARGIN: 'margin',
  MARGIN_TOP: 'marginTop',
  MARGIN_RIGHT: 'marginRight',
  MARGIN_BOTTOM: 'marginBottom',
  MARGING_LEFT: 'marginLeft',
  PADDING: 'padding',
  PADDING_TOP: 'paddingTop',
  PADDING_RIGHT: 'paddingRight',
  PADDING_BOTTOM: 'paddingBottom',
  PADDING_LEFT: 'paddingLeft',
};
export const SPACING_PROPS = {
  ...SPACING_PROPS_NATIVE,
  MARGIN_HORIZONTAL: 'marginH',
  MARGIN_VERTICAL: 'marginV',
  PADDING_HORIZONTAL: 'paddingH',
  PADDING_VERTICAL: 'paddingV',
  ALIGN: 'align',
  JUSTIFY: 'justify',
};
export const UI_PROPS = { ...SPACING_PROPS };

export const SPACING_PROPS_NATIVE_LIST = Object.values(SPACING_PROPS_NATIVE);
export const SPACING_PROPS_LIST = Object.values(SPACING_PROPS);
export const UI_PROPS_LIST = Object.values(UI_PROPS);
