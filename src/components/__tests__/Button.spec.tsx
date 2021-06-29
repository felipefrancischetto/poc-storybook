/* eslint-disable jest/valid-expect */

/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { Button } from "../Button/Button";


describe("Button", () => {
  it("Render Normally", () => {
    const { getAllByTestId } = render(<Button label="Button Test"></Button>);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(getAllByTestId("button-component")).toBeInTheDocument;
  });
});
