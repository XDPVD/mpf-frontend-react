import { render, screen } from '@testing-library/react';
import FileItem from '../FileItem';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  path: '/path',
  size: 10,
  downloadUrl: 'https://download.org',
};

describe('FileItem', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <FileItem file={mockData} deleteButton={true} />
      </BaseComponent>
    );
  });

  it('should render file item', async () => {
    const listElement = screen.getByTestId(/list-item/i);

    expect(listElement).toBeInTheDocument();
  });
});
