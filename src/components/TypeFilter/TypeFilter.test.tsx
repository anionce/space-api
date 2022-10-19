import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { TypeFilter } from './TypeFilter';
import { rocketFilterTypes } from '../../models/Rocket';
import { RocketType } from 'src/models/Rocket';

const defaultProps = {
	onTypeChanged: jest.fn(),
	itemFilterTypes: rocketFilterTypes,
};

test('renders correcly', () => {
	const { container } = customRender(<TypeFilter {...defaultProps} />);

	expect(container).toMatchSnapshot();
});

test('all elements are displayed', () => {
	customRender(<TypeFilter {...defaultProps} />);

	expect(screen.getByText(RocketType.SuperRocket)).toBeInTheDocument();
	expect(screen.getByText(RocketType.ExtraRocket)).toBeInTheDocument();
	expect(screen.getByText(RocketType.HiperRocket)).toBeInTheDocument();
});
