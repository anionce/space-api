import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { NavBar } from './NavBar';

test('renders correcly', () => {
	const { container } = customRender(<NavBar />);

	expect(container).toMatchSnapshot();
});

test('renders elements correctly', () => {
	customRender(<NavBar />);

	expect(screen.getByText(/Capsules/i)).toBeInTheDocument();
	expect(screen.getByText(/Rockets/i)).toBeInTheDocument();
	expect(screen.getByText(/Add a rocket/i)).toBeInTheDocument();
});
