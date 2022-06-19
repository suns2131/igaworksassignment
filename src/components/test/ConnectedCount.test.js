/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Summary from "../presentational/Summary";

it("matches snapshot", () => {
  const utils = render(<Summary current={41233} subtraction={93} description="Unique Event Count" />);
  expect(utils.container).toMatchSnapshot();
});
