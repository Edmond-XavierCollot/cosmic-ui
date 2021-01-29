import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "./index";
import UI from "../UI";

describe("Grid", () => {
  test("Render", () => {
    render(
      <Grid width={100}>
        <UI size={1 / 2}>semi</UI>
        <UI size={1 / 2}>semi</UI>
      </Grid>
    );
    const uis = screen.getAllByText("semi");
    expect(uis.length).toBe(2);
  });
});
