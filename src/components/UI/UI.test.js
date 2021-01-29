import React from "react";
import { screen, render } from "@testing-library/react";
import UI from "./index";

describe("UI", () => {
  test("Render without props", () => {
    render(<UI>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui).toBeTruthy();
    expect(ui.tagName).toBe("DIV");
  });
  test("Render specific html tag", () => {
    render(<UI tag="button">coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.tagName).toBe("BUTTON");
  });
  test("Padding props", () => {
    render(<UI padding={15}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.padding).toBe("15px");
  });
  test("Padding Horizontal props", () => {
    render(<UI paddingH={15}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.paddingLeft).toBe("15px");
    expect(ui.style.paddingRight).toBe("15px");
  });
  test("Padding Vertical props", () => {
    render(<UI paddingV={15}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.paddingTop).toBe("15px");
    expect(ui.style.paddingBottom).toBe("15px");
  });
  test("Padding Number prop", () => {
    render(<UI padding={10}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.padding).toBe("10px");
  });
  test("Margin props", () => {
    render(<UI margin={15}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.margin).toBe("15px");
  });
  test("Margin Horizontal props", () => {
    render(<UI marginH={15}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.marginLeft).toBe("15px");
    expect(ui.style.marginRight).toBe("15px");
  });
  test("Margin Vertical props", () => {
    render(<UI marginV={15}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.marginTop).toBe("15px");
    expect(ui.style.marginBottom).toBe("15px");
  });
  test("Margin Number prop", () => {
    render(<UI margin={10}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.margin).toBe("10px");
  });
  test("Width prop", () => {
    render(<UI width={100}>coucou</UI>);
    const ui = screen.getByText("coucou");
    expect(ui.style.width).toBe("100px");
  });
});
