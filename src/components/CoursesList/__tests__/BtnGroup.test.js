import { render, screen } from "@testing-library/react";
import BtnGroup from "../BtnGroup";
import BaseComponent from "@mocks/BaseComponent";

describe("BtnGroup", () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <BtnGroup openModal={() => {}} />
      </BaseComponent>
    );
  });

  it("should render two buttons", async () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
  });
});
