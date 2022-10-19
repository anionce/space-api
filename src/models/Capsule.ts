export type Capsule = {
	id: string;
	land_landings: number;
	last_update: string;
	launches: string[];
	reuse_count: number;
	serial: string;
	status: string;
	type: string;
	water_landings: number;
};

export enum CapsuleType {
	Dragon10 = 'Dragon 1.0',
	Dragon11 = 'Dragon 1.1',
	Dragon20 = 'Dragon 2.0',
}

export const capsuleFilterTypes: CapsuleType[] = [CapsuleType.Dragon10, CapsuleType.Dragon11, CapsuleType.Dragon20];
