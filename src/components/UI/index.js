import React from "react";
import { css, cx } from "@emotion/css";
import { SPACING_PROPS_LIST } from "./props";
import { divideProps } from "../../utils";
import { stylesHandlers } from "./styles";

const styles = {
  ui: css({
    display: "flex",
    boxSizing: "border-box",
  }),
};

const UI = ({
  tag = "div",
  children,
  style,
  width,
  height,
  className,
  ...props
}) => {
  if (typeof tag !== "string") {
    throw `UI: 'tag' should be a string but got '${typeof tag}' instead`;
  }
  const TAG = tag;
  const { spacing = {}, otherProps } = divideProps(props, {
    spacing: SPACING_PROPS_LIST,
  });

  const htmlStyles = Object.entries(spacing).reduce(
    (acc, [prop, value]) => ({
      ...acc,
      ...stylesHandlers[prop](value, spacing),
    }),
    { width, height, ...style }
  );

  return (
    <TAG
      style={htmlStyles}
      className={cx(styles.ui, className)}
      {...otherProps}
    >
      {children}
    </TAG>
  );
};

export default UI;
