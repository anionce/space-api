import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { Header } from './Header';

test('renders correcly', () => {
	const { container } = customRender(<Header />);

	expect(container).toMatchSnapshot();
});

test('renders elements correctly', () => {
	customRender(<Header />);

	expect(screen.getByAltText(/header-logo/i)).toBeInTheDocument();
});
