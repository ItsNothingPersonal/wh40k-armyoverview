import type { MeleeWeaponName } from '@/enums/meleeWeaponName';
import type { UnitName } from '@/enums/unitName';
import type { Ability } from './ability';

export type MeleeWeapon = {
	name: MeleeWeaponName;
	attacks: number;
	weaponSkill: number;
	strength: number;
	armourPenetration: number;
	damage: number | string;
	keywords?: Ability[];
	ownedBy: UnitName[];
};
