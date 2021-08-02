import { render, screen } from '@testing-library/react';
import AddResourceDialog from '../AddResourceDialog';
import BaseComponent from '@mocks/BaseComponent';

describe('AddResourceDialog', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <AddResourceDialog openAdd={true} setOpenAdd={() => {}} />
      </BaseComponent>
    );
  });

  it('should render the dialog', async () => {
    const headingElement = screen.getByText(/Nuevo Recurso/i);

    expect(headingElement).toBeInTheDocument();
  });
});
