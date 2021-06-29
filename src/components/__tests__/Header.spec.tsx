/* eslint-disable jest/valid-expect */
/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { Header } from "../Header/Header";

describe("Header", () => {
  it("Render Normally", () => {
    const { getAllByTestId } = render(
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(getAllByTestId("button-component")).toBeInTheDocument;
  });
});
