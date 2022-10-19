import { render } from '@testing-library/react';
import React from 'react';
import { App } from './App';

test('app renders', () => {
	const { container } = render(<App />);

	expect(container).toMatchSnapshot();
});
