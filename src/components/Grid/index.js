import UI from "../UI";
import { parseSpacingValue } from "@utils";

const hasExtraBottomMargin = (elems, buffer, startIndex, globalSize) => {
  const array = React.Children.toArray(elems);
  let size = buffer;

  for (let index = startIndex; index < array.length; index++) {
    size += globalSize || array[index].props.size || 1;

    if (size > 1) {
      return true;
    }
  }

  return false;
};

const Grid = ({ children, gap = 0, rowGap = 0, globalSize, ...otherProps }) => {
  const gapValue = parseSpacingValue(gap);
  const rowGapValue = parseSpacingValue(rowGap);
  // Buffer of the total size of the current row
  let buffer = 0;

  return (
    <UI style={{ flexWrap: "wrap" }} {...otherProps}>
      {React.Children.map(children, (child, index) => {
        const finalSize = globalSize || child.props.size || 1;
        buffer += finalSize;

        // if the buffer has exceeded 1, it means that this element is gonna wrap to the next row, so it does not have gap in front of the row
        const hasNoExtraLeftMargin = buffer > 1;

        if (hasNoExtraLeftMargin) {
          buffer -= 1;
        }

        const numberOfPossibleGap = 1 / finalSize - 1;

        return React.cloneElement(child, {
          style: {
            ...(!hasNoExtraLeftMargin &&
              index !== 0 && {
                marginLeft: gapValue,
              }),
            // If the element is not on the last row, it has a row gap
            ...(hasExtraBottomMargin(children, buffer, index, globalSize) && {
              marginBottom: rowGapValue || gapValue,
            }),
            width: `calc((100% - ${
              numberOfPossibleGap * gapValue
            }px) * ${finalSize})`,
          },
        });
      })}
    </UI>
  );
};

export default Grid;
