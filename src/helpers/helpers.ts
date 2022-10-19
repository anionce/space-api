import { Item } from '../models/common';

export const resultMatch = (array1: Item[] | undefined, array2: Item[] | undefined): any => {
	const concatArray: Item[] | undefined = array1 && array2 && array1?.concat(array2);

	let duplicated: any[] | Item[] = [];

	concatArray?.forEach((el: Item, index: number) => {
		concatArray.forEach((item: Item, indice: number) => {
			if (el === item && index !== indice && !duplicated.includes(item)) {
				duplicated.push(item);
			}
		});
	});

	return duplicated;
};
