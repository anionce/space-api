import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.scss';

export const Home = () => {
	const { t } = useTranslation();

	return (
		<div className='home-container'>
			<h1>{t('space_api.home.welcome')}</h1>
			<h2>{t('space_api.home.ready')}</h2>
		</div>
	);
};
