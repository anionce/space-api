import React from 'react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterTypes } from '../../models/common';
import './TypeFilter.scss';

type typeFilterProps = {
	onTypeChanged: (event: ChangeEvent<HTMLSelectElement>) => void;
	itemFilterTypes: FilterTypes[];
	typeSelected?: string;
	defaultOption?: string;
};

export const TypeFilter = ({ onTypeChanged, typeSelected, itemFilterTypes, defaultOption }: typeFilterProps) => {
	const { t } = useTranslation();

	return (
		<div className='select-container'>
			<label htmlFor='type'>{t('space_api.selector.type')}</label>
			<select id='type' onChange={onTypeChanged} defaultValue={typeSelected ?? ''}>
				<option value={defaultOption}>{defaultOption}</option>
				{itemFilterTypes.map((option: FilterTypes) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};
