import { render, screen } from '@testing-library/react';
import CommentAnswers from '../CommentAnswers';
import BaseComponent from '@mocks/BaseComponent';

describe('CommentAnswers', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <CommentAnswers comment_id={3} showAnswers={true} />
      </BaseComponent>
    );
  });

  it('should render the button to show comments', async () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
