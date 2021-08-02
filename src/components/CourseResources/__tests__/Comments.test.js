import { render, screen } from '@testing-library/react';
import Comments from '../Comments';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  post: {
    id: 3,
  },
};

describe('Comments', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <Comments post={mockData} />
      </BaseComponent>
    );
  });

  it('should render the comment', async () => {
    const headingElement = screen.getByRole('button');

    expect(headingElement).toBeInTheDocument();
  });
});
