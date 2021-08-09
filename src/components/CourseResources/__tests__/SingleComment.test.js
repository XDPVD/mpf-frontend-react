import { render, screen } from '@testing-library/react';
import SingleComment from '../SingleComment';
import BaseComponent from '@mocks/BaseComponent';


const mockData = {
  comment: {
    date: '2021-08-01',
    time: '20:20',
    content: 'contenido',
    user: {
      name: 'Usuario',
    },
  },
}

describe('SingleComment', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <SingleComment comment_id={1} comment={mockData.comment} />
      </BaseComponent>
    );
  });

  it('should render the comment', async () => {
    const comment = screen.getByTestId(/single-comment/i);

    expect(comment).toBeInTheDocument();
  });
});
