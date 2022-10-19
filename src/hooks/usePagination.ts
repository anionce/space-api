import { useState } from 'react';
import { Item } from '../models/common';
import { Rocket } from '../models/Rocket';

export const usePagination = (totalItems: Item[] | undefined) => {
	const [pagesPerPage] = useState<number>(5);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const indexOfLastPost: number = currentPage * pagesPerPage;
	const indexOfFirstPost: number = indexOfLastPost - pagesPerPage;

	const currentItems: Rocket[] | undefined = totalItems?.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	return { currentItems, paginate, currentPage, pagesPerPage };
};
