import { configureStore } from '@reduxjs/toolkit';
import { spaceApi } from '../services/api';
import { rocketSlice } from '../redux/rocketSlice';

export const store = configureStore({
	reducer: {
		[spaceApi.reducerPath]: spaceApi.reducer,
		[rocketSlice.name]: rocketSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(spaceApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
