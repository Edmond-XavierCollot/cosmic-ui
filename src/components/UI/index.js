import { STYLE_PROPS_LIST } from "./props";
import { divideProps } from "@utils";
import { generateStyles } from "./styles";

const styles = {
  ui: css({
    display: "flex",
    boxSizing: "border-box",
    flexWrap: "wrap",
    flexDirection: "row",
  }),
  directionColumn: css({
    flexDirection: "column",
  }),
};

const UI = ({
  tag = "div",
  children,
  style,
  width,
  height,
  className,
  direction,
  ...props
}) => {
  if (typeof tag !== "string") {
    throw `UI: 'tag' should be a string but got '${typeof tag}' instead`;
  }
  const TAG = tag;
  const { spacing = {}, otherProps } = divideProps(props, {
    spacing: STYLE_PROPS_LIST,
  });

  const htmlStyles = { ...generateStyles(spacing), width, height, ...style };

  return (
    <TAG
      style={htmlStyles}
      className={cx(
        styles.ui,
        { [styles.directionColumn]: direction === "column" },
        className
      )}
      {...otherProps}
    >
      {children}
    </TAG>
  );
};

export default UI;
