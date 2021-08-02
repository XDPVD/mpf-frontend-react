import { render, screen } from '@testing-library/react';
import GroupField from '../GroupField';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  name: 'Archivo',
  downloadUrl: 'https://download.org',
};

describe('GroupField', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <GroupField handleChangeGrupal={() => {}} grupal="Grupal" />
      </BaseComponent>
    );
  });

  it('should render the group field', async () => {
    const headingElement = screen.getByText(/Grupal\/Individual/i);

    expect(headingElement).toBeInTheDocument();
  });
});
