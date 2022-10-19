import React from 'react';
import footer from '../../assets/img/footer.svg';
import './Footer.scss';

export const Footer = () => {
	return (
		<div className='footer'>
			<img alt='footer-logo' src={footer}></img>
		</div>
	);
};
