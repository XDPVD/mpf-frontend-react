import { render, screen } from '@testing-library/react';
import UsersList from '../UsersList';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  users: [
    {
      name: 'Usuario 1',
    },
    {
      name: 'Usuario 2',
    },
  ],
};

describe('UsersList', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <UsersList users={mockData.users} />
      </BaseComponent>
    );
  });

  it('should render the user', async () => {
    const headingElement = screen.getByText(/Usuario 1/i);

    expect(headingElement).toBeInTheDocument();
  });
});
