import { render, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import BaseComponent from '@mocks/BaseComponent';

const mockCourseData = {
    id: 3,
    name: 'Curso 1',
    description: 'Esta es una decripcion',
};

describe('CourseCard', () => {
    beforeEach(() => {
        render(
            <BaseComponent>
                <CourseCard course={mockCourseData} />
            </BaseComponent>
        );
    });

    it('should render the card for the element specified', async () => {
        const cardElement = screen.getByText(/Curso 1/i);

        expect(cardElement).toBeInTheDocument();
    });
});
