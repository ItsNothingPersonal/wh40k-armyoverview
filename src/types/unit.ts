import type { MeleeWeaponName } from '@/enums/meleeWeaponName';
import type { RangedWeaponName } from '@/enums/rangedWeaponName';
import type { UnitName } from '@/enums/unitName';
import type { Abilities } from './abilities';

export type Unit = {
	name: UnitName;
	movement: number;
	toughness: number;
	save: number;
	wounds: number;
	leadership: number;
	objectiveControl: number;
	abilities: Abilities;
	invulnerableSave?: number;
	factionKeyword: string;
	keywords: string[];
	meleeWeapons: MeleeWeaponName[];
	rangeWeapons: RangedWeaponName[];
};
