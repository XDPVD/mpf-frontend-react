import { render, screen } from "@testing-library/react";
import AddCourseDialog from "../AddCourseDialog";
import BaseComponent from "@mocks/BaseComponent";

describe("AddCourseDialog", () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <AddCourseDialog open={true} setOpen={() => {}} setOpenSB={() => {}} />
      </BaseComponent>
    );
  });

  it("should render the dialog", async () => {
    const headingElement = screen.getByText(/Crear curso/i);

    expect(headingElement).toBeInTheDocument();
  });
});
