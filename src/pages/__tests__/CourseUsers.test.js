import { render, screen } from '@testing-library/react';
import CourseUsers from '../CourseUsers';
import BaseComponent from '@mocks/BaseComponent';

describe('CourseUsers', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <CourseUsers courseId={5} />
      </BaseComponent>
    );
  });

  it('should render the list of teachers', async () => {
    const profesor = screen.getByText(/profesor/i);

    expect(profesor).toBeInTheDocument();
  });

  it('should render the list of students', async () => {
    const alumno = screen.getByText(/Alumnos/i);

    expect(alumno).toBeInTheDocument();
  });

  it('should render the list of groups', async () => {
    const group = screen.getByTestId(/group-grid/i);

    expect(group).toBeInTheDocument();
  });
});
