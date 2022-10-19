import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Capsule } from '../models/Capsule';

export const spaceApi = createApi({
	reducerPath: 'spaceApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4' }),
	endpoints: builder => ({
		getCapsuleById: builder.query<Capsule, string | undefined>({
			query: id => `/capsules/${id}`,
		}),
		listCapsules: builder.query<[], void>({
			query: () => `/capsules`,
		}),
	}),
});

export const { useListCapsulesQuery, useGetCapsuleByIdQuery } = spaceApi;
