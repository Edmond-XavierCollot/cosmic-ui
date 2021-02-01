import { screen, render } from "@testing-library/react";
import Text from "./";

describe("Text", () => {
  test("Render Text", () => {
    render(<Text>simple</Text>);
    const text = screen.getByText("simple");
    expect(text).toHaveStyle({ display: "inline-flex" });
  });
  test("size prop", () => {
    render(<Text size={20}>size</Text>);
    const text = screen.getByText("size");
    expect(text).toHaveStyle({ fontSize: "20px" });
  });
  test("weight prop", () => {
    render(<Text bold>weight</Text>);
    const text = screen.getByText("weight");
    expect(text).toHaveStyle({ fontWeight: 700, display: "inline-flex" });
  });
});
