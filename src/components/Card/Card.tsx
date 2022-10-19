import React from 'react';
import { Rocket as RocketIcon } from '@mui/icons-material';
import { Rocket } from '../../models/Rocket';
import { Link, useLocation } from 'react-router-dom';
import { Capsule } from '../../models/Capsule';
import './Card.scss';
import { useTranslation } from 'react-i18next';

export type CardProps = {
	item: Capsule | Rocket;
};

export const Card = ({ item }: CardProps) => {
	const { t } = useTranslation();
	const { pathname } = useLocation();

	const isCapsule: Boolean = pathname.includes('capsules');

	return (
		<div className='card'>
			<div className='row'>
				<div className='title-container'>
					<div>{item.serial}</div>
					<RocketIcon />
				</div>
				<div className='subtitle'>{item.type}</div>
			</div>
			<div className='row'>
				<Link to={`${isCapsule ? '/capsules' : '/rockets'}/${item.id}`}>
					<button name='detailsButton'>{t('space_api.button.details')}</button>
				</Link>
			</div>
		</div>
	);
};
