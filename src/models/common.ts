import { Capsule, CapsuleType } from './Capsule';
import { Rocket, RocketType } from './Rocket';

export type FilterTypes = RocketType | CapsuleType;

export type Item = Rocket | Capsule;
