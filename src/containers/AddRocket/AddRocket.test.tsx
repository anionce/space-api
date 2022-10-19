import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { customRender } from '../../assets/tests/utils';
import { AddRocket } from './AddRocket';
import { RocketType } from '../../models/Rocket';

test('renders correcly', () => {
	const { container } = customRender(<AddRocket />);

	expect(container).toMatchSnapshot();
});

test('all elements are displayed', () => {
	customRender(<AddRocket />);

	expect(screen.getByText(/Save rocket/i)).toBeInTheDocument();
});

test('filter types are displayed', () => {
	customRender(<AddRocket />);

	expect(screen.getByText(RocketType.SuperRocket)).toBeInTheDocument();
	expect(screen.getByText(RocketType.ExtraRocket)).toBeInTheDocument();
	expect(screen.getByText(RocketType.HiperRocket)).toBeInTheDocument();
});
