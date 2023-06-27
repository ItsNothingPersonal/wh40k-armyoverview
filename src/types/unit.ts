import type { Abilities } from './abilities';

export type Unit = {
	name: string;
	movement: number;
	toughness: number;
	save: number;
	wounds: number;
	leadership: number;
	objectiveControl: number;
	abilities: Abilities;
};
