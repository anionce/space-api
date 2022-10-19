import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { ItemDetails } from './ItemDetails';

test('renders correcly', () => {
	const { container } = customRender(<ItemDetails />);

	expect(container).toMatchSnapshot();
});

test('all elements are displayed', () => {
	customRender(<ItemDetails />);

	expect(screen.getByText(/Edit/i)).toBeInTheDocument();
});
