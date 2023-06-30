import type { RangedWeaponName } from '@/enums/rangedWeaponName';
import type { UnitName } from '@/enums/unitName';
import type { Ability } from './ability';

export type RangedWeapon = {
	name: RangedWeaponName;
	range: number;
	attacks: number | 'd6' | '2d6' | '3d6' | 'd6+2' | 'd6+3';
	ballisticSkill: number | undefined;
	strength: number;
	armourPenetration: number;
	damage: number | 'd6' | 'd3';
	keywords?: Ability[];
	ownedBy: UnitName[];
};
