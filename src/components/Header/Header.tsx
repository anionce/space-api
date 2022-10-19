import { Link } from 'react-router-dom';
import './Header.scss';
import spaceLogo from '../../assets/img/spaceLogo.svg';
import React from 'react';

export const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<img className='header-logo' alt='header-logo' src={spaceLogo}></img>
			</Link>
		</div>
	);
};
