import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { Input } from '../../components/Input';
import { TypeFilter } from '../../components/TypeFilter';
import { resultMatch } from '../../helpers/helpers';
import { useFilter } from '../../hooks/useFilter';
import { usePagination } from '../../hooks/usePagination';
import { useSearch } from '../../hooks/useSearch';
import { useListCapsulesQuery } from '../../services/api';
import './ListPage.scss';
import { ErrorPage } from '../ErrorPage';
import { useAppSelector } from '../../store/hooks';
import { capsuleFilterTypes } from '../../models/Capsule';
import { Item } from '../../models/common';
import { rocketFilterTypes } from '../../models/Rocket';
import { Capsule } from '../../models/Capsule';
import { Rocket } from '../../models/Rocket';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { NotFound } from '../NotFound/NotFound';
import { RootState } from 'src/store/store';

export const ListPage = () => {
	const { pathname } = useLocation();

	const { data: capsules, isFetching, isError } = useListCapsulesQuery();
	const rockets: Rocket[] = useAppSelector((state: RootState) => state.rocketSlice.rockets);
	const isCapsule: Boolean = pathname.includes('capsules');

	const data: Rocket[] | Capsule[] | undefined = isCapsule ? capsules : rockets;

	const { onInputChange, searchedItems, searchText, emptySearch } = useSearch(data);
	const { filteredItems, emptyFilter, onTypeChanged } = useFilter(data);

	const searchedArray: Item[] | undefined = !emptySearch ? searchedItems : data;
	const filteredArray: Item[] | undefined = !emptyFilter ? filteredItems : data;
	const finalResult: Item[] = resultMatch(searchedArray, filteredArray);

	let { currentItems, paginate, currentPage, pagesPerPage } = usePagination(finalResult);

	return (
		<>
			<Input searchText={searchText} onInputChange={onInputChange} />
			<TypeFilter
				onTypeChanged={onTypeChanged}
				itemFilterTypes={isCapsule ? capsuleFilterTypes : rocketFilterTypes}
				defaultOption={'All'}
			/>
			{isFetching && <div className='loading'>Loading...</div>}
			{isError && <ErrorPage />}
			{currentItems && currentItems?.length === 0 && <NotFound />}
			<div className='list-container'>
				{currentItems?.map((item: Rocket) => (
					<Card key={item.id} item={item} />
				))}
				<Pagination
					count={finalResult?.length}
					paginate={paginate}
					pagesPerPage={pagesPerPage}
					currentPage={currentPage}
				/>
			</div>
		</>
	);
};
