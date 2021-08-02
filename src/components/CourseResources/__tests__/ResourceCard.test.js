import { render, screen } from '@testing-library/react';
import ResourceCard from '../ResourceCard';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  kind: 'T',
  post: {
    title: 'Titulo',
    date: '2021-06-01',
    time: '20:20',
    evaluation: {
      date_max: new Date(),
      time_max: new Date(),
      score_max: 20,
    },
  },
};

describe('ResourceCard', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <ResourceCard kind={mockData.kind} post={mockData.post} />
      </BaseComponent>
    );
  });

  it('should render the resource card', async () => {
    const headingElement = screen.getByText(/Titulo/i);

    expect(headingElement).toBeInTheDocument();
  });
});
