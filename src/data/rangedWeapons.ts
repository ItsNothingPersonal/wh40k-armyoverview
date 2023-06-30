import { RangedWeaponName } from '@/enums/rangedWeaponName';
import { UnitName } from '@/enums/unitName';
import type { RangedWeapon } from '@/types/rangedWeapon';

export const rangedWeapons = new Map<RangedWeaponName, RangedWeapon | RangedWeapon[]>([
	[
		RangedWeaponName.Fidelis,
		{
			name: RangedWeaponName.Fidelis,
			range: 36,
			attacks: 3,
			ballisticSkill: 2,
			strength: 6,
			armourPenetration: -1,
			damage: 2,
			keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }],
			ownedBy: [UnitName.MorvennVahl]
		}
	],
	[
		RangedWeaponName.ParagonMissileLauncherPrioris,
		{
			name: RangedWeaponName.ParagonMissileLauncherPrioris,
			range: 36,
			attacks: 2,
			ballisticSkill: 2,
			strength: 9,
			armourPenetration: -2,
			damage: 'd6',
			ownedBy: [UnitName.MorvennVahl]
		}
	],
	[
		RangedWeaponName.ParagonMissileLauncherSanctorum,
		{
			name: RangedWeaponName.ParagonMissileLauncherSanctorum,
			range: 36,
			attacks: '2d6',
			ballisticSkill: 2,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'BLAST' }],
			ownedBy: [UnitName.MorvennVahl]
		}
	],
	[
		RangedWeaponName.BoltPistol,
		[
			{
				name: RangedWeaponName.BoltPistol,
				range: 12,
				attacks: 1,
				ballisticSkill: 2,
				strength: 4,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'PISTOL' }],
				ownedBy: [UnitName.Canoness, UnitName.Palatine]
			},
			{
				name: RangedWeaponName.BoltPistol,
				range: 12,
				attacks: 1,
				ballisticSkill: 3,
				strength: 4,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'PISTOL' }],
				ownedBy: [
					UnitName.GeminaeSuperia,
					UnitName.EphraelStern,
					UnitName.BattleSisterSquad,
					UnitName.NovitiateSuperior,
					UnitName.AestredThurga,
					UnitName.AgathaeDolan,
					UnitName.Imagifier,
					UnitName.CelestianSacresants,
					UnitName.Hospitaller,
					UnitName.Dogmata,
					UnitName.ParagonWarsuits,
					UnitName.RepentiaSuperior,
					UnitName.DominionSquad,
					UnitName.SeraphimSquad,
					UnitName.ZephyrimSquad,
					UnitName.RetributorSquad
				]
			}
		]
	],
	[
		RangedWeaponName.BrazierOfHolyFire,
		{
			name: RangedWeaponName.BrazierOfHolyFire,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 6,
			armourPenetration: -1,
			damage: 2,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'ONE SHOT' }, { name: 'TORRENT' }],
			ownedBy: [UnitName.Canoness]
		}
	],
	[
		RangedWeaponName.CondemnorBoltgun,
		{
			name: RangedWeaponName.CondemnorBoltgun,
			range: 24,
			attacks: 1,
			ballisticSkill: 2,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [
				{ name: 'ANTI-PSYKER', additionalInformation: 2 },
				{ name: 'DEVASTATING WOUNDS' },
				{ name: 'PRECISION' },
				{ name: 'RAPID FIRE', additionalInformation: 1 }
			],
			ownedBy: [UnitName.Canoness]
		}
	],
	[
		RangedWeaponName.InfernoPistol,
		[
			{
				name: RangedWeaponName.InfernoPistol,
				range: 6,
				attacks: 1,
				ballisticSkill: 2,
				strength: 8,
				armourPenetration: -4,
				damage: 'd3',
				keywords: [{ name: 'MELTA', additionalInformation: 2 }, { name: 'PISTOL' }],
				ownedBy: [UnitName.Canoness]
			},
			{
				name: RangedWeaponName.InfernoPistol,
				range: 6,
				attacks: 1,
				ballisticSkill: 3,
				strength: 8,
				armourPenetration: -4,
				damage: 'd3',
				keywords: [{ name: 'MELTA', additionalInformation: 2 }, { name: 'PISTOL' }],
				ownedBy: [UnitName.CelestianSacresants, UnitName.SeraphimSquad]
			}
		]
	],
	[
		RangedWeaponName.PlasmaPistolStandard,
		[
			{
				name: RangedWeaponName.PlasmaPistolStandard,
				range: 12,
				attacks: 1,
				ballisticSkill: 2,
				strength: 7,
				armourPenetration: -2,
				damage: 1,
				keywords: [{ name: 'PISTOL' }],
				ownedBy: [UnitName.Canoness, UnitName.Palatine]
			},
			{
				name: RangedWeaponName.PlasmaPistolStandard,
				range: 12,
				attacks: 1,
				ballisticSkill: 3,
				strength: 7,
				armourPenetration: -2,
				damage: 1,
				keywords: [{ name: 'PISTOL' }],
				ownedBy: [
					UnitName.NovitiateSuperior,
					UnitName.CelestianSacresants,
					UnitName.SeraphimSquad,
					UnitName.ZephyrimSquad
				]
			}
		]
	],
	[
		RangedWeaponName.PlasmaPistolSupercharge,
		[
			{
				name: RangedWeaponName.PlasmaPistolSupercharge,
				range: 12,
				attacks: 1,
				ballisticSkill: 2,
				strength: 8,
				armourPenetration: -3,
				damage: 2,
				keywords: [{ name: 'HAZARDOUS' }, { name: 'PISTOL' }],
				ownedBy: [UnitName.Canoness, UnitName.Palatine]
			},
			{
				name: RangedWeaponName.PlasmaPistolSupercharge,
				range: 12,
				attacks: 1,
				ballisticSkill: 3,
				strength: 8,
				armourPenetration: -3,
				damage: 2,
				keywords: [{ name: 'HAZARDOUS' }, { name: 'PISTOL' }],
				ownedBy: [
					UnitName.NovitiateSuperior,
					UnitName.CelestianSacresants,
					UnitName.SeraphimSquad,
					UnitName.ZephyrimSquad
				]
			}
		]
	],
	[
		RangedWeaponName.TwinMinistorumHeavyFlamer,
		{
			name: RangedWeaponName.TwinMinistorumHeavyFlamer,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 6,
			armourPenetration: -1,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }, { name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.JunithEruita]
		}
	],
	[
		RangedWeaponName.Autogun,
		[
			{
				name: RangedWeaponName.Autogun,
				range: 24,
				attacks: 1,
				ballisticSkill: 4,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'RAPID FIRE', additionalInformation: 1 }],
				ownedBy: [UnitName.Missionary]
			},
			{
				name: RangedWeaponName.Autogun,
				range: 24,
				attacks: 1,
				ballisticSkill: 3,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'RAPID FIRE', additionalInformation: 1 }],
				ownedBy: [UnitName.SisterNovitiate]
			}
		]
	],
	[
		RangedWeaponName.HolyPistol,
		{
			name: RangedWeaponName.HolyPistol,
			range: 12,
			attacks: 3,
			ballisticSkill: 4,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'PISTOL' }],
			ownedBy: [UnitName.Missionary]
		}
	],
	[
		RangedWeaponName.MinistorumShotgun,
		{
			name: RangedWeaponName.MinistorumShotgun,
			range: 12,
			attacks: 2,
			ballisticSkill: 4,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'ASSAULT' }],
			ownedBy: [UnitName.Missionary]
		}
	],
	[
		RangedWeaponName.TheArdentBlade,
		{
			name: RangedWeaponName.TheArdentBlade,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 6,
			armourPenetration: -2,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }],
			ownedBy: [UnitName.SaintCelestine]
		}
	],
	[
		RangedWeaponName.BoltPistols,
		{
			name: RangedWeaponName.BoltPistols,
			range: 12,
			attacks: 6,
			ballisticSkill: 2,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'PISTOL' }],
			ownedBy: [UnitName.TriumphOfSaintKatherine]
		}
	],
	[
		RangedWeaponName.ArtificerCraftedStormBolter,
		[
			{
				name: RangedWeaponName.ArtificerCraftedStormBolter,
				range: 24,
				attacks: 2,
				ballisticSkill: 3,
				strength: 4,
				armourPenetration: 0,
				damage: 2,
				keywords: [{ name: 'RAPID FIRE', additionalInformation: 2 }],
				ownedBy: [UnitName.BattleSisterSquad]
			},
			{
				name: RangedWeaponName.ArtificerCraftedStormBolter,
				range: 24,
				attacks: 2,
				ballisticSkill: 3,
				strength: 4,
				armourPenetration: 0,
				damage: 2,
				keywords: [{ name: 'RAPID FIRE', additionalInformation: 2 }, { name: 'ASSAULT' }],
				ownedBy: [UnitName.DominionSquad]
			}
		]
	],
	[
		RangedWeaponName.Boltgun,
		[
			{
				name: RangedWeaponName.Boltgun,
				range: 24,
				attacks: 1,
				ballisticSkill: 3,
				strength: 4,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'RAPID FIRE', additionalInformation: 1 }],
				ownedBy: [
					UnitName.BattleSisterSquad,
					UnitName.NovitiateSuperior,
					UnitName.Imagifier,
					UnitName.RetributorSquad
				]
			},
			{
				name: RangedWeaponName.Boltgun,
				range: 24,
				attacks: 1,
				ballisticSkill: 3,
				strength: 4,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'RAPID FIRE', additionalInformation: 2 }, { name: 'ASSAULT' }],
				ownedBy: [UnitName.DominionSquad]
			}
		]
	],
	[
		RangedWeaponName.HeavyBolter,
		[
			{
				name: RangedWeaponName.HeavyBolter,
				range: 36,
				attacks: 3,
				ballisticSkill: 4,
				strength: 5,
				armourPenetration: -1,
				damage: 2,
				keywords: [{ name: 'HEAVY' }, { name: 'SUSTAINED HITS', additionalInformation: 1 }],
				ownedBy: [UnitName.BattleSisterSquad, UnitName.RetributorSquad]
			},
			{
				name: RangedWeaponName.HeavyBolter,
				range: 36,
				attacks: 3,
				ballisticSkill: 3,
				strength: 5,
				armourPenetration: -1,
				damage: 2,
				keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }],
				ownedBy: [
					UnitName.ParagonWarsuits,
					UnitName.Mortifiers,
					UnitName.Exorcist,
					UnitName.Castigator,
					UnitName.Immolator
				]
			}
		]
	],
	[
		RangedWeaponName.Meltagun,
		[
			{
				name: RangedWeaponName.Meltagun,
				range: 12,
				attacks: 1,
				ballisticSkill: 3,
				strength: 9,
				armourPenetration: -4,
				damage: 'd6',
				keywords: [{ name: 'MELTA', additionalInformation: 2 }],
				ownedBy: [UnitName.BattleSisterSquad]
			},
			{
				name: RangedWeaponName.Meltagun,
				range: 12,
				attacks: 1,
				ballisticSkill: 3,
				strength: 9,
				armourPenetration: -4,
				damage: 'd6',
				keywords: [{ name: 'ASSAULT' }, { name: 'MELTA', additionalInformation: 2 }],
				ownedBy: [UnitName.DominionSquad]
			}
		]
	],
	[
		RangedWeaponName.MinistorumFlamer,
		[
			{
				name: RangedWeaponName.MinistorumFlamer,
				range: 12,
				attacks: 'd6',
				ballisticSkill: undefined,
				strength: 5,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }],
				ownedBy: [UnitName.BattleSisterSquad, UnitName.SisterNovitiate]
			},
			{
				name: RangedWeaponName.MinistorumFlamer,
				range: 12,
				attacks: 'd6',
				ballisticSkill: undefined,
				strength: 5,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'ASSAULT' }, { name: 'IGNORES COVER' }, { name: 'TORRENT' }],
				ownedBy: [UnitName.DominionSquad]
			}
		]
	],
	[
		RangedWeaponName.MinistorumHeavyFlamer,
		{
			name: RangedWeaponName.MinistorumHeavyFlamer,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 6,
			armourPenetration: -1,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }],
			ownedBy: [UnitName.BattleSisterSquad, UnitName.ParagonWarsuits, UnitName.RetributorSquad]
		}
	],
	[
		RangedWeaponName.MultiMelta,
		[
			{
				name: RangedWeaponName.MultiMelta,
				range: 18,
				attacks: 2,
				ballisticSkill: 4,
				strength: 9,
				armourPenetration: -4,
				damage: 'd6',
				keywords: [{ name: 'HEAVY' }, { name: 'MELTA', additionalInformation: 2 }],
				ownedBy: [UnitName.BattleSisterSquad, UnitName.RetributorSquad]
			},
			{
				name: RangedWeaponName.MultiMelta,
				range: 18,
				attacks: 2,
				ballisticSkill: 3,
				strength: 9,
				armourPenetration: -4,
				damage: 'd6',
				keywords: [{ name: 'MELTA', additionalInformation: 2 }],
				ownedBy: [UnitName.ParagonWarsuits]
			}
		]
	],
	[
		RangedWeaponName.Autopistol,
		[
			{
				name: RangedWeaponName.Autopistol,
				range: 12,
				attacks: 1,
				ballisticSkill: 3,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'PISTOL' }],
				ownedBy: [UnitName.SisterNovitiate]
			},
			{
				name: RangedWeaponName.Autopistol,
				range: 12,
				attacks: 1,
				ballisticSkill: 4,
				strength: 3,
				armourPenetration: 0,
				damage: 1,
				keywords: [{ name: 'PISTOL' }],
				ownedBy: [UnitName.Preacher]
			}
		]
	],
	[
		RangedWeaponName.ZealotsVindictor,
		{
			name: RangedWeaponName.ZealotsVindictor,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 5,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }],
			ownedBy: [UnitName.Preacher]
		}
	],
	[
		RangedWeaponName.MinistorumHandFlamer,
		{
			name: RangedWeaponName.MinistorumHandFlamer,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'PISTOL' }, { name: 'TORRENT' }],
			ownedBy: [UnitName.CelestianSacresants, UnitName.SeraphimSquad]
		}
	],
	[
		RangedWeaponName.ParagonGrenadeLaunchers,
		{
			name: RangedWeaponName.ParagonGrenadeLaunchers,
			range: 24,
			attacks: 1,
			ballisticSkill: 3,
			strength: 9,
			armourPenetration: -2,
			damage: 'd3',
			keywords: [{ name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.ParagonWarsuits]
		}
	],
	[
		RangedWeaponName.ParagonStormBolters,
		{
			name: RangedWeaponName.ParagonStormBolters,
			range: 24,
			attacks: 2,
			ballisticSkill: 3,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'RAPID FIRE', additionalInformation: 2 }, { name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.ParagonWarsuits]
		}
	],
	[
		RangedWeaponName.MortifierFlamer,
		{
			name: RangedWeaponName.MortifierFlamer,
			range: 12,
			attacks: 'd6',
			ballisticSkill: undefined,
			strength: 5,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }, { name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.Mortifiers]
		}
	],
	[
		RangedWeaponName.PenitentFlamers,
		{
			name: RangedWeaponName.PenitentFlamers,
			range: 12,
			attacks: '2d6',
			ballisticSkill: undefined,
			strength: 5,
			armourPenetration: 0,
			damage: 1,
			keywords: [
				{ name: 'ASSAULT' },
				{ name: 'IGNORES COVER' },
				{ name: 'TORRENT' },
				{ name: 'TWIN-LINKED' }
			],
			ownedBy: [UnitName.PenitentEngines]
		}
	],
	[
		RangedWeaponName.ExorcistConflagrationRockets,
		{
			name: RangedWeaponName.ExorcistConflagrationRockets,
			range: 36,
			attacks: '3d6',
			ballisticSkill: 3,
			strength: 5,
			armourPenetration: 0,
			damage: 1,
			keywords: [
				{ name: 'BLAST' },
				{ name: 'HEAVY' },
				{ name: 'IGNORES COVER' },
				{ name: 'INDIRECT FIRE' }
			],
			ownedBy: [UnitName.Exorcist]
		}
	],
	[
		RangedWeaponName.ExorcistMissileLauncher,
		{
			name: RangedWeaponName.ExorcistMissileLauncher,
			range: 36,
			attacks: 'd6+2',
			ballisticSkill: 3,
			strength: 10,
			armourPenetration: -2,
			damage: 'd6',
			keywords: [{ name: 'HEAVY' }, { name: 'INDIRECT FIRE' }],
			ownedBy: [UnitName.Exorcist]
		}
	],
	[
		RangedWeaponName.HunterKillerMissile,
		{
			name: RangedWeaponName.HunterKillerMissile,
			range: 48,
			attacks: 1,
			ballisticSkill: 2,
			strength: 14,
			armourPenetration: -3,
			damage: 'd6',
			keywords: [{ name: 'ONE SHOT' }],
			ownedBy: [UnitName.Exorcist, UnitName.Castigator, UnitName.SororitasRhino, UnitName.Immolator]
		}
	],
	[
		RangedWeaponName.CastigatorAutocannons,
		{
			name: RangedWeaponName.CastigatorAutocannons,
			range: 48,
			attacks: 4,
			ballisticSkill: 3,
			strength: 9,
			armourPenetration: -1,
			damage: 3,
			keywords: [{ name: 'TWIN-LINKED' }, { name: 'RAPID FIRE', additionalInformation: 4 }],
			ownedBy: [UnitName.Castigator]
		}
	],
	[
		RangedWeaponName.CastigatorBattleCannon,
		{
			name: RangedWeaponName.CastigatorBattleCannon,
			range: 48,
			attacks: 'd6+3',
			ballisticSkill: 3,
			strength: 10,
			armourPenetration: -1,
			damage: 3,
			keywords: [{ name: 'BLAST' }, { name: 'IGNORES COVER' }],
			ownedBy: [UnitName.Castigator]
		}
	],
	[
		RangedWeaponName.StormBolter,
		{
			name: RangedWeaponName.StormBolter,
			range: 24,
			attacks: 2,
			ballisticSkill: 3,
			strength: 4,
			armourPenetration: 0,
			damage: 1,
			keywords: [{ name: 'RAPID FIRE', additionalInformation: 2 }],
			ownedBy: [UnitName.Castigator, UnitName.SororitasRhino]
		}
	],
	[
		RangedWeaponName.ImmolationFlamers,
		{
			name: RangedWeaponName.ImmolationFlamers,
			range: 18,
			attacks: '2d6',
			ballisticSkill: undefined,
			strength: 6,
			armourPenetration: -1,
			damage: 1,
			keywords: [{ name: 'IGNORES COVER' }, { name: 'TORRENT' }],
			ownedBy: [UnitName.Immolator]
		}
	],
	[
		RangedWeaponName.TwinHeavyBolter,
		{
			name: RangedWeaponName.TwinHeavyBolter,
			range: 36,
			attacks: 3,
			ballisticSkill: 3,
			strength: 5,
			armourPenetration: -1,
			damage: 2,
			keywords: [{ name: 'SUSTAINED HITS', additionalInformation: 1 }, { name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.Immolator]
		}
	],
	[
		RangedWeaponName.TwinMultiMelta,
		{
			name: RangedWeaponName.TwinMultiMelta,
			range: 18,
			attacks: 2,
			ballisticSkill: 3,
			strength: 9,
			armourPenetration: -4,
			damage: 'd6',
			keywords: [{ name: 'MELTA', additionalInformation: 2 }, { name: 'TWIN-LINKED' }],
			ownedBy: [UnitName.Immolator]
		}
	]
]);
