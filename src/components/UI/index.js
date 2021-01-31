import React from "react";
import { css, cx } from "@emotion/css";
import { SPACING_PROPS_LIST } from "./props";
import { divideProps } from "../../utils";
import { buildStylesTools } from "./styles";

const styles = {
  ui: css({
    display: "flex",
    boxSizing: "border-box",
  }),
};

export const buildUI = ({ spacing } = {}) => {
  const { generateStyles } = buildStylesTools(spacing);
  return ({
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
    const { spacingProps = {}, otherProps } = divideProps(props, {
      spacingProps: SPACING_PROPS_LIST,
    });

    const htmlStyles = {
      ...generateStyles(spacingProps, style),
      width,
      height,
    };

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
};

const UI = buildUI();

export default UI;
