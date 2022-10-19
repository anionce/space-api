import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addRocket, updateRocket } from '../../redux/rocketSlice';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFilter } from '../../hooks/useFilter';
import { TypeFilter } from '../../components/TypeFilter';
import './AddRocket.scss';
import { Input } from '../../components/Input/Input';
import { rocketFilterTypes } from '../../models/Rocket';
import { Rocket } from '../../models/Rocket';
import React from 'react';

export const AddRocket = () => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const { id } = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();

	const getAllRockets: Rocket[] = useAppSelector(state => state.rocketSlice.rockets);
	const rocket: Rocket | undefined = getAllRockets.find(rocket => rocket.id === id);

	const { type, onTypeChanged, setType } = useFilter(getAllRockets, rocket);
	const [serial, setSerial] = useState<string>(rocket?.serial || '');

	useEffect(() => {
		if (isAddPage) {
			setSerial('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const canSave: Boolean = Boolean(serial && type);
	const isEditAction: Boolean = Boolean(id && serial && type);
	const isAddPage: Boolean = pathname.includes('add');

	const resetActions = (): void => {
		setSerial('');
		setType('');
		navigate('/rockets');
	};

	const onTitleChanged = (event: React.FormEvent<HTMLInputElement>): void => setSerial(event.currentTarget.value);

	const onSaveRocket = (): void => {
		if (isEditAction) {
			dispatch(updateRocket({ id, serial, type }));
		} else {
			const id = (getAllRockets.length + 1).toString();
			dispatch(addRocket({ id, serial, type }));
		}
		resetActions();
	};

	return (
		<section className='select-control'>
			<Input onTitleChanged={onTitleChanged} serial={serial} />
			<TypeFilter onTypeChanged={onTypeChanged} typeSelected={type} itemFilterTypes={rocketFilterTypes} />
			<form className='form-container'>
				<button className='save-button' type='button' onClick={onSaveRocket} disabled={!canSave}>
					{t('space_api.button.save')}
				</button>
			</form>
		</section>
	);
};
