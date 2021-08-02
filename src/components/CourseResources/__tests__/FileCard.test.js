import { render, screen } from '@testing-library/react';
import FileCard from '../FileCard';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  name: 'Archivo',
  downloadUrl: 'https://download.org',
};

describe('FileCard', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <FileCard file={mockData} />
      </BaseComponent>
    );
  });

  it('should render the file', async () => {
    const headingElement = screen.getByText(/Archivo/i);

    expect(headingElement).toBeInTheDocument();
  });
});
