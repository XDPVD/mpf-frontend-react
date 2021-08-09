import { render, screen } from '@testing-library/react';
import ReplyForm from '../ReplyForm';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  isReplyMode: false,
  comment_id: 1,
  pub_id: 1,
  offReplyMode: () =>{},
}

describe('ReplyForm', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <ReplyForm isReplyMode={mockData.isReplyMode} comment_id={mockData.comment_id} pub_id={mockData.pub_id} offReplyMode={mockData.offReplyMode} />
      </BaseComponent>
    );
  });

  it('should render the reply input', async () => {
    const input = screen.getByTestId(/comment-input/i);

    expect(input).toBeInTheDocument();
  });

  it('should render the action buttons', async () => {
    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);
  });
});
