import { Link, useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import './ItemDetails.scss';
import { useGetCapsuleByIdQuery } from '../../services/api';
import { Rocket } from '../../models/Rocket';
import React from 'react';

export const ItemDetails = () => {
	const { id } = useParams();
	const { pathname } = useLocation();

	const isCapsule: Boolean = pathname.includes('capsules');

	const getAllRockets: Rocket[] = useAppSelector(state => state.rocketSlice.rockets);
	const rocket: Rocket | undefined = getAllRockets.find(rocket => rocket.id === id);
	const { data: capsule, isFetching, isError } = useGetCapsuleByIdQuery(id);

	return (
		<>
			{capsule && isFetching && <div>Loading...</div>}
			{capsule && isError && <div>There has been an error loading the capsule</div>}
			<div className='container'>
				<div className='subcontainer'>
					<div className='title'>{isCapsule ? capsule?.type : rocket?.type}</div>
					<p>{isCapsule ? capsule?.type : rocket?.type}</p>
					{!isCapsule && (
						<Link to={`/rockets/${id}/update/`}>
							<button>Edit</button>
						</Link>
					)}
				</div>
			</div>
			)
		</>
	);
};
