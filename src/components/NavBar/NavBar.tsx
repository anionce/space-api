import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './NavBar.scss';
import React from 'react';

export const NavBar = () => {
	const { t } = useTranslation();

	return (
		<nav>
			<NavLink to='capsules'>{t('space_api.navbar.capsules')}</NavLink>
			<NavLink to='rockets'>{t('space_api.navbar.rockets')}</NavLink>
			<NavLink to='rocket/add'>{t('space_api.navbar.add')}</NavLink>
		</nav>
	);
};
