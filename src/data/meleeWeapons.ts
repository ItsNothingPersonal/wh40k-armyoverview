import { MeleeWeaponName } from '@/enums/meleeWeaponName';
import { UnitName } from '@/enums/unitName';
import type { MeleeWeapon } from '@/types/meleeWeapon';

export const meleeWeapons = new Map<MeleeWeaponName, MeleeWeapon | MeleeWeapon[]>([
	[
		MeleeWeaponName.LanceOfIlluminationStrike,
		{
			name: MeleeWeaponName.LanceOfIlluminationStrike,
			attacks: 5,
			weaponSkill: 2,
			strength: 8,
			armourPenetration: -2,
			damage: 3,
			keywords: [{ name: 'DEVASTATING WOUNDS' }],
			ownedBy: [UnitName.MorvennVahl]
		}
	],
	[
		MeleeWeaponName.LanceOfIlluminationSweep,
		{
			name: MeleeWeaponName.LanceOfIlluminationSweep,
			attacks: 10,
			weaponSkill: 2,
			strength: 5,
			armourPenetration: -1,
			damage: 1,
			ownedBy: [UnitName.MorvennVahl]
		}
	],
	[
		MeleeWeaponName.BlessedBlade,
		{
			name: MeleeWeaponName.BlessedBlade,
			attacks: 3,
			weaponSkill: 2,
			strength: 6,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.Canoness]
		}
	],
	[
		MeleeWeaponName.Chainsword,
		[
			{
				name: MeleeWeaponName.Chainsword,
				attacks: 5,
				weaponSkill: 2,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [UnitName.Canoness]
			},
			{
				name: MeleeWeaponName.Chainsword,
				attacks: 4,
				weaponSkill: 4,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [UnitName.Missionary, UnitName.Preacher]
			},
			{
				name: MeleeWeaponName.Chainsword,
				attacks: 3,
				weaponSkill: 4,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [UnitName.BattleSisterSquad, UnitName.DominionSquad, UnitName.RetributorSquad]
			},
			{
				name: MeleeWeaponName.Chainsword,
				attacks: 4,
				weaponSkill: 3,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [UnitName.SeraphimSquad]
			}
		]
	],
	[
		MeleeWeaponName.PowerWeapon,
		[
			{
				name: MeleeWeaponName.PowerWeapon,
				attacks: 4,
				weaponSkill: 2,
				strength: 4,
				armourPenetration: -2,
				damage: 1,
				ownedBy: [UnitName.Canoness]
			},
			{
				name: MeleeWeaponName.PowerWeapon,
				attacks: 3,
				weaponSkill: 4,
				strength: 4,
				armourPenetration: -2,
				damage: 1,
				ownedBy: [UnitName.Missionary]
			},
			{
				name: MeleeWeaponName.PowerWeapon,
				attacks: 3,
				weaponSkill: 3,
				strength: 4,
				armourPenetration: -2,
				damage: 1,
				ownedBy: [UnitName.GeminaeSuperia, UnitName.SeraphimSquad, UnitName.ZephyrimSquad]
			},
			{
				name: MeleeWeaponName.PowerWeapon,
				attacks: 2,
				weaponSkill: 4,
				strength: 4,
				armourPenetration: -2,
				damage: 1,
				ownedBy: [
					UnitName.BattleSisterSquad,
					UnitName.NovitiateSuperior,
					UnitName.DominionSquad,
					UnitName.RetributorSquad
				]
			},
			{
				name: MeleeWeaponName.PowerWeapon,
				attacks: 2,
				weaponSkill: 3,
				strength: 4,
				armourPenetration: -2,
				damage: 1,
				ownedBy: [UnitName.Crusaders]
			}
		]
	],
	[
		MeleeWeaponName.PalatineBlade,
		{
			name: MeleeWeaponName.PalatineBlade,
			attacks: 4,
			weaponSkill: 2,
			strength: 4,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.Palatine]
		}
	],
	[
		MeleeWeaponName.MaceOfCastigation,
		{
			name: MeleeWeaponName.MaceOfCastigation,
			attacks: 4,
			weaponSkill: 2,
			strength: 6,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.JunithEruita]
		}
	],
	[
		MeleeWeaponName.TheArdentBlade,
		{
			name: MeleeWeaponName.TheArdentBlade,
			attacks: 5,
			weaponSkill: 2,
			strength: 6,
			armourPenetration: -3,
			damage: 2,
			keywords: [{ name: 'DEVASTATING WOUNDS' }],
			ownedBy: [UnitName.SaintCelestine]
		}
	],
	[
		MeleeWeaponName.RelicWeapons,
		{
			name: MeleeWeaponName.RelicWeapons,
			attacks: 18,
			weaponSkill: 2,
			strength: 5,
			armourPenetration: -2,
			damage: 1,
			ownedBy: [UnitName.TriumphOfSaintKatherine]
		}
	],
	[
		MeleeWeaponName.Sanctity,
		{
			name: MeleeWeaponName.Sanctity,
			attacks: 4,
			weaponSkill: 2,
			strength: 6,
			armourPenetration: -2,
			damage: 2,
			keywords: [{ name: 'ANTI-CHAOS', additionalInformation: 2 }, { name: 'PRECISION' }],
			ownedBy: [UnitName.EphraelStern]
		}
	],
	[
		MeleeWeaponName.TheOutcastsWeapons,
		{
			name: MeleeWeaponName.TheOutcastsWeapons,
			attacks: 6,
			weaponSkill: 2,
			strength: 4,
			armourPenetration: -1,
			damage: 1,
			keywords: [{ name: 'PRECISION' }],
			ownedBy: [UnitName.KyganilOfTheBloodyTears]
		}
	],
	[
		MeleeWeaponName.CloseCombatWeapon,
		[
			{
				name: MeleeWeaponName.CloseCombatWeapon,
				attacks: 1,
				weaponSkill: 4,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [
					UnitName.BattleSisterSquad,
					UnitName.NovitiateSuperior,
					UnitName.SisterNovitiate,
					UnitName.DominionSquad,
					UnitName.RetributorSquad
				]
			},
			{
				name: MeleeWeaponName.CloseCombatWeapon,
				attacks: 3,
				weaponSkill: 4,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [UnitName.Imagifier]
			},
			{
				name: MeleeWeaponName.CloseCombatWeapon,
				attacks: 2,
				weaponSkill: 3,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				ownedBy: [UnitName.SeraphimSquad]
			}
		]
	],
	[
		MeleeWeaponName.NovitiateMeleeWeapons,
		{
			name: MeleeWeaponName.NovitiateMeleeWeapons,
			attacks: 2,
			weaponSkill: 4,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			ownedBy: [UnitName.SisterNovitiate]
		}
	],
	[
		MeleeWeaponName.BladeOfVigil,
		{
			name: MeleeWeaponName.BladeOfVigil,
			attacks: 4,
			weaponSkill: 3,
			strength: 5,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.AestredThurga]
		}
	],
	[
		MeleeWeaponName.ScribesStaff,
		{
			name: MeleeWeaponName.ScribesStaff,
			attacks: 3,
			weaponSkill: 4,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			ownedBy: [UnitName.AgathaeDolan]
		}
	],
	[
		MeleeWeaponName.DialogusStaff,
		{
			name: MeleeWeaponName.DialogusStaff,
			attacks: 3,
			weaponSkill: 4,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			ownedBy: [UnitName.Dialogus]
		}
	],
	[
		MeleeWeaponName.ZealotsVindictor,
		{
			name: MeleeWeaponName.ZealotsVindictor,
			attacks: 3,
			weaponSkill: 4,
			strength: 5,
			armourPenetration: -1,
			damage: 2,
			ownedBy: [UnitName.Preacher]
		}
	],
	[
		MeleeWeaponName.AnointedHalberd,
		{
			name: MeleeWeaponName.AnointedHalberd,
			attacks: 2,
			weaponSkill: 3,
			strength: 5,
			armourPenetration: -2,
			damage: 1,
			ownedBy: [UnitName.CelestianSacresants]
		}
	],
	[
		MeleeWeaponName.HallowedMace,
		{
			name: MeleeWeaponName.HallowedMace,
			attacks: 2,
			weaponSkill: 3,
			strength: 4,
			armourPenetration: -1,
			damage: 2,
			ownedBy: [UnitName.CelestianSacresants]
		}
	],
	[
		MeleeWeaponName.SpearOfTheFaithful,
		{
			name: MeleeWeaponName.SpearOfTheFaithful,
			attacks: 3,
			weaponSkill: 3,
			strength: 5,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.CelestianSacresants]
		}
	],
	[
		MeleeWeaponName.ChirurgeonsTools,
		{
			name: MeleeWeaponName.ChirurgeonsTools,
			attacks: 3,
			weaponSkill: 4,
			strength: 3,
			armourPenetration: 0,
			damage: 1,
			ownedBy: [UnitName.Hospitaller]
		}
	],
	[
		MeleeWeaponName.MaceOfTheRighteous,
		{
			name: MeleeWeaponName.MaceOfTheRighteous,
			attacks: 4,
			weaponSkill: 3,
			strength: 5,
			armourPenetration: -1,
			damage: 2,
			ownedBy: [UnitName.Dogmata]
		}
	],
	[
		MeleeWeaponName.ParagonWarBlade,
		{
			name: MeleeWeaponName.ParagonWarBlade,
			attacks: 4,
			weaponSkill: 3,
			strength: 6,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.ParagonWarsuits]
		}
	],
	[
		MeleeWeaponName.ParagonWarMace,
		{
			name: MeleeWeaponName.ParagonWarMace,
			attacks: 3,
			weaponSkill: 4,
			strength: 12,
			armourPenetration: -1,
			damage: 3,
			ownedBy: [UnitName.ParagonWarsuits]
		}
	],
	[
		MeleeWeaponName.NeuralWhips,
		{
			name: MeleeWeaponName.NeuralWhips,
			attacks: 4,
			weaponSkill: 3,
			strength: 3,
			armourPenetration: -1,
			damage: 1,
			keywords: [{ name: 'ANTI-INFANTRY', additionalInformation: 4 }],
			ownedBy: [UnitName.RepentiaSuperior]
		}
	],
	[
		MeleeWeaponName.PenitentEviscerator,
		{
			name: MeleeWeaponName.PenitentEviscerator,
			attacks: 2,
			weaponSkill: 4,
			strength: 6,
			armourPenetration: -2,
			damage: 2,
			ownedBy: [UnitName.SistersRepentia]
		}
	],
	[
		MeleeWeaponName.DeathCultPowerBlades,
		{
			name: MeleeWeaponName.DeathCultPowerBlades,
			attacks: 4,
			weaponSkill: 2,
			strength: 4,
			armourPenetration: -2,
			damage: 1,
			keywords: [{ name: 'PRECISION' }],
			ownedBy: [UnitName.DeathCultAssassins]
		}
	],
	[
		MeleeWeaponName.PenitentBuzzBlade,
		[
			{
				name: MeleeWeaponName.PenitentBuzzBlade,
				attacks: 4,
				weaponSkill: 3,
				strength: 10,
				armourPenetration: -3,
				damage: 2,
				ownedBy: [UnitName.Mortifiers]
			},
			{
				name: MeleeWeaponName.PenitentBuzzBlade,
				attacks: 4,
				weaponSkill: 4,
				strength: 10,
				armourPenetration: -3,
				damage: 2,
				keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }],
				ownedBy: [UnitName.PenitentEngines]
			}
		]
	],
	[
		MeleeWeaponName.PenitentFlail,
		[
			{
				name: MeleeWeaponName.PenitentFlail,
				attacks: 8,
				weaponSkill: 3,
				strength: 5,
				armourPenetration: -1,
				damage: 1,
				ownedBy: [UnitName.Mortifiers]
			},
			{
				name: MeleeWeaponName.PenitentFlail,
				attacks: 8,
				weaponSkill: 4,
				strength: 5,
				armourPenetration: -1,
				damage: 1,
				keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }],
				ownedBy: [UnitName.PenitentEngines]
			}
		]
	],
	[
		MeleeWeaponName.TwinPenitentBuzzBlades,
		[
			{
				name: MeleeWeaponName.TwinPenitentBuzzBlades,
				attacks: 4,
				weaponSkill: 3,
				strength: 10,
				armourPenetration: -3,
				damage: 2,
				keywords: [{ name: 'TWIN-LINKED' }],
				ownedBy: [UnitName.Mortifiers]
			},
			{
				name: MeleeWeaponName.TwinPenitentBuzzBlades,
				attacks: 4,
				weaponSkill: 4,
				strength: 10,
				armourPenetration: -3,
				damage: 2,
				keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }, { name: 'TWIN-LINKED' }],
				ownedBy: [UnitName.PenitentEngines]
			}
		]
	],
	[
		MeleeWeaponName.TwinPenitentFlails,
		[
			{
				name: MeleeWeaponName.TwinPenitentFlails,
				attacks: 8,
				weaponSkill: 3,
				strength: 5,
				armourPenetration: -1,
				damage: 1,
				keywords: [{ name: 'TWIN-LINKED' }],
				ownedBy: [UnitName.Mortifiers]
			},
			{
				name: MeleeWeaponName.TwinPenitentFlails,
				attacks: 8,
				weaponSkill: 4,
				strength: 5,
				armourPenetration: -1,
				damage: 1,
				keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }, { name: 'TWIN-LINKED' }],
				ownedBy: [UnitName.PenitentEngines]
			}
		]
	],
	[
		MeleeWeaponName.ArmouredTracks,
		{
			name: MeleeWeaponName.ArmouredTracks,
			attacks: 3,
			weaponSkill: 4,
			strength: 6,
			armourPenetration: 0,
			damage: 1,
			ownedBy: [UnitName.Exorcist, UnitName.Castigator, UnitName.SororitasRhino]
		}
	],
	[
		MeleeWeaponName.ArcoFlails,
		{
			name: MeleeWeaponName.ArcoFlails,
			attacks: 4,
			weaponSkill: 4,
			strength: 5,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }, { name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.ArcoFlagellants]
		}
	]
]);
