import './ErrorPage.scss';
import error from '../../assets/img/error.svg';
import React from 'react';

export const ErrorPage = () => {
	return (
		<div className='error-container'>
			<h1>Ooops!</h1>
			<h2>There has been an error.</h2>
			<h3>Please try again later...</h3>
			<img alt='error' src={error}></img>
		</div>
	);
};
