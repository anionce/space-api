import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { Home } from './Home';

test('renders correcly', () => {
	const { container } = customRender(<Home />);

	expect(container).toMatchSnapshot();
});

test('all elements are displayed', () => {
	customRender(<Home />);

	expect(screen.getByText(/Welcome to the space API/i)).toBeInTheDocument();
	expect(screen.getByText(/Ready?/i)).toBeInTheDocument();
});
