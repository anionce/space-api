import { useState } from 'react';
import { Item } from '../models/common';

export const useSearch = (items: Item[] | undefined) => {
	const [searchText, setSearchText] = useState<string>('');

	const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
		setSearchText(event.currentTarget.value);
	};

	const searchedItems: Item[] | undefined = items?.filter((item: any) =>
		item.serial?.toLowerCase().includes(searchText.toLowerCase())
	);

	const emptySearch: Boolean = searchText.length === 0;

	return { onInputChange, searchedItems, searchText, emptySearch, setSearchText };
};
