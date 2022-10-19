import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { ListPage } from './ListPage';

test('renders correcly', () => {
	const { container } = customRender(<ListPage />);

	expect(container).toMatchSnapshot();
});

test('all elements are displayed', () => {
	customRender(<ListPage />);

	expect(screen.getAllByText(/Details/i)).toHaveLength(5);
});
