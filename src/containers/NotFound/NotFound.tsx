import React from 'react';
import { useTranslation } from 'react-i18next';
import notFound from '../../assets/img/notFound.svg';
import './NotFound.scss';

export const NotFound = () => {
	const { t } = useTranslation();

	return (
		<div className='not-found-container'>
			<h1 className='text'>{t('space_api.not-found.title')}</h1>
			<img alt='not-found' src={notFound}></img>
		</div>
	);
};
