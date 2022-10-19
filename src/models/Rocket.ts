export type Rocket = {
	id: string | undefined;
	serial: string;
	type: string | undefined;
};

export enum RocketType {
	SuperRocket = 'SuperRocket',
	ExtraRocket = 'ExtraRocket',
	HiperRocket = 'HiperRocket',
}

export const rocketFilterTypes: RocketType[] = [RocketType.SuperRocket, RocketType.HiperRocket, RocketType.ExtraRocket];
