import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { NotFound } from './NotFound';

test('renders correcly', () => {
	const { container } = customRender(<NotFound />);

	expect(container).toMatchSnapshot();
});

test('all elements are displayed', () => {
	customRender(<NotFound />);

	expect(screen.getByAltText('not-found')).toBeInTheDocument();
	expect(screen.getByText(/Sorry, this doesn't exist/i)).toBeInTheDocument();
});
