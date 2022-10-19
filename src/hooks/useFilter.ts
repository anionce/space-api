import { ChangeEvent, useState } from 'react';
import { Item } from '../models/common';

export const useFilter = (items: Item[] | undefined, item?: Item | undefined) => {
	const [type, setType] = useState<string | undefined>(item?.type);

	const onTypeChanged = (event: ChangeEvent<HTMLSelectElement>): void => setType(event.target.value);

	const itemsArray: Item[] | undefined = items?.filter((item: Item) => item.type === type);

	const filteredItems: Item[] | undefined = itemsArray?.length ? itemsArray : items;

	const emptyFilter: Boolean = type === 'All';

	return { type, emptyFilter, filteredItems, onTypeChanged, setType };
};
