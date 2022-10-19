import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Rocket } from '../models/Rocket';
import { mockedRockets } from '../assets/mocks/mockedRockets';

export type rocketSliceState = { rockets: Rocket[]; rocket: Rocket | undefined };

export const rocketInitialState: rocketSliceState = {
	rockets: mockedRockets,
	rocket: undefined,
};

export const rocketSlice = createSlice({
	name: 'rocketSlice',
	initialState: rocketInitialState,
	reducers: {
		addRocket(state, action: PayloadAction<Rocket>) {
			state.rockets.push(action.payload);
		},
		updateRocket(state, action: PayloadAction<Rocket>) {
			const { id, serial, type } = action.payload;
			state.rockets = state.rockets.map(rocket => (rocket.id === id ? { ...rocket, serial, type } : rocket));
		},
		deleteRocket(state, action: PayloadAction<Rocket>) {
			const { id } = action.payload;
			state.rockets = state.rockets.filter(rocket => rocket.id !== id);
		},
	},
});

export const { addRocket, updateRocket, deleteRocket } = rocketSlice.actions;
