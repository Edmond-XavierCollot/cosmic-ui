import UI from "../UI";
import { divideProps } from "../../utils";

const textClass = css({
  display: "inline-flex",
});

const weights = {
  thin: 100,
  light: 200,
  book: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
  ultraBlack: 900,
};

const weightsClasses = Object.entries(weights).reduce(
  (acc, [name, value]) => ({
    ...acc,
    [name]: css({
      fontWeight: value,
    }),
  }),
  {}
);

const weightsList = Object.keys(weights);

const Text = ({ size, style, className, children, color, ...props }) => {
  let newClassName = cx(className, textClass);

  const { weightsProps, ...otherProps } = divideProps(props, {
    weightsProps: weightsList,
  });

  if (weightsProps) {
    const weightsPropsKeys = Object.keys(weightsProps);
    const weightProp = weightsPropsKeys[weightsPropsKeys.length - 1];
    newClassName = cx(newClassName, weightsClasses[weightProp]);
  }

  const newStyle = { ...style };

  if (size) {
    newStyle.fontSize = size;
  }
  if (color) {
    newStyle.color = color;
  }
  return (
    <UI tag="span" className={newClassName} style={newStyle} {...otherProps}>
      {children}
    </UI>
  );
};

export default Text;
