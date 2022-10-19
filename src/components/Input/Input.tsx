import './Input.scss';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import React from 'react';

type inputProps = {
	onInputChange?: (event: React.FormEvent<HTMLInputElement>) => void;
	onTitleChanged?: (event: React.FormEvent<HTMLInputElement>) => void;
	searchText?: string | undefined;
	serial?: string | undefined;
};

export const Input = ({ onInputChange, searchText, onTitleChanged, serial }: inputProps) => {
	const { t } = useTranslation();
	const { pathname } = useLocation();

	const isForm: Boolean = pathname.includes('add') || pathname.includes('update');

	return (
		<div className='input-container'>
			<label htmlFor='input'>{isForm ? t('space_api.input.title') : t('space_api.input.search')}</label>
			<input
				id='input'
				maxLength={100}
				onChange={isForm ? onTitleChanged : onInputChange}
				value={isForm ? serial : searchText}></input>
		</div>
	);
};
