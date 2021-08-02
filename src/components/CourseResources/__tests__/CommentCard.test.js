import { render, screen } from '@testing-library/react';
import CommentCard from '../CommentCard';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  isAnswer: true,
  isReplyMode: true,
  onReplyMode: () => {},
  comment: {
    date: '2021-08-01',
    time: '20:20',
    content: 'contenido',
    user: {
      name: 'Usuario',
    },
  },
};

describe('CommentCard', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <CommentCard
          isAnswer={mockData.isAnswer}
          isReplyMode={mockData.isReplyMode}
          onReplyMode={mockData.onReplyMode}
          comment={mockData.comment}
        />
      </BaseComponent>
    );
  });

  it('should render the card', async () => {
    const headingElement = screen.getByTestId(/card-content/i);

    expect(headingElement).toBeInTheDocument();
  });
});
