import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from './Card';
import { rocketMock } from '../../assets/mocks/mockedItem';
import { customRender } from '../../assets/tests/utils';

const defaultProps = { item: rocketMock };

test('renders correcly', () => {
	const { container } = customRender(<Card {...defaultProps} />);

	expect(container).toMatchSnapshot();
});

test('renders elements correctly', () => {
	customRender(<Card {...defaultProps} />);

	expect(screen.getByText(/Rocket123/i)).toBeInTheDocument();
	expect(screen.getByText(/ExtraRocket/i)).toBeInTheDocument();
	expect(screen.getByText(/Details/i)).toBeInTheDocument();
});
