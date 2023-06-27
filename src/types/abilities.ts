import type { Ability } from './ability';

export type Abilities = {
	core?: Ability[];
	faction: string;
	personal: Ability[];
};
