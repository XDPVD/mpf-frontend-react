import { render, screen } from "@testing-library/react";
import JoinCourseDialog from "../JoinCourseDialog";
import BaseComponent from "@mocks/BaseComponent";

describe("JoinCourseDialog", () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <JoinCourseDialog open={true} setOpen={() => {}} setOpenSB={() => {}} />
      </BaseComponent>
    );
  });

  it("should render the dialog", async () => {
    const headingElement = screen.getByText(/Unirse a un curso/i);

    expect(headingElement).toBeInTheDocument();
  });
});
