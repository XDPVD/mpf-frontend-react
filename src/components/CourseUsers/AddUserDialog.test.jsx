import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import GroupCard from './GroupCard'

test('renders content', () => {
		const component = render(
			<GroupCard />
		)
		expect(component.container).toHaveTextContent('No hay alumnos')
	}
)