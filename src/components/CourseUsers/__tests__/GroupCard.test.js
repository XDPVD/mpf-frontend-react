import { render, screen } from '@testing-library/react';
import GroupCard from '../GroupCard';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
  users: [{}],
  isAdmin: false,
  group: {
    name: 'Grupo 1',
    groupId: 1,
    isLocked: true,
  },
};

describe('GroupCard', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <GroupCard
          users={mockData.users}
          isAdmin={mockData.isAdmin}
          group={mockData.group}
        />
      </BaseComponent>
    );
  });

  it('should render the group card', async () => {
    const headingElement = screen.getByText(/Grupo 1/i);

    expect(headingElement).toBeInTheDocument();
  });
});
