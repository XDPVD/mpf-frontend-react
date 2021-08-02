import { render, screen } from '@testing-library/react';
import AddUserDialog from '../AddUserDialog';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  id: 1,
  code: 'ASDASD',
};

describe('AddUserDialog', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <AddUserDialog
          open={true}
          setOpen={() => {}}
          course={mockData}
          reloadFunc={() => {}}
        />
      </BaseComponent>
    );
  });

  it('should render the dialog', async () => {
    const headingElement = screen.getByText(/Añadir nuevo alumno/i);

    expect(headingElement).toBeInTheDocument();
  });
});
