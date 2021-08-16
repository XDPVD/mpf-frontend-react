import { render, screen } from '@testing-library/react';
import CoursesCreatedList from '../CoursesCreatedList';
import BaseComponent from '@mocks/BaseComponent';

const mockData = {
    courses_created: [
        {
            id: 1,
            name: 'Curso 1',
            description: 'Esta es una descripción',
        },
        {
            id: 2,
            name: 'Curso 2',
            description: 'Esta es otra descripción',
        },
    ],
};

describe('CoursesCreatedList', () => {
    beforeEach(() => {
        render(
            <BaseComponent>
                <CoursesCreatedList courses={mockData} />
            </BaseComponent>
        );
    });

    it('should render two courses', async () => {
        const cursos = screen.getAllByTestId(/course-item/i);

        expect(cursos.length).toBe(2);
    });
});
