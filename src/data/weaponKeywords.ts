export const weaponKeywords = new Map<string, string | string[]>([
	[
		'HAZARDOUS',
		'After a unit shoots or fights, roll one Hazardous test (one D6) for each Hazardous weapon used. For each 1, one model equipped with a Hazardous weapon is destroyed (Characters, Monsters and Vehicles suffer 3 mortal wounds instead).'
	],
	[
		'DEVASTATING WOUNDS',
		'A Critical Wound inflicts mortal wounds equal to the weapon’s Damage characteristic, instead of any normal damage.'
	],
	[
		'LETHAL HITS',
		'Weapons with [LETHAL HITS] in their profile are known as Lethal Hits weapons. Each time an attack is made with such a weapon, a Critical Hit automatically wounds the target.'
	],
	[
		'SUSTAINED HITS',
		'[SUSTAINED HITS X]: Each Critical Hit scores ‘x’ additional hits on the target.'
	],
	[
		'TWIN-LINKED',
		'Weapons with [TWIN-LINKED] in their profile are known as Twin-linked weapons. Each time an attack is made with such a weapon, you can re-roll that attack’s Wound roll.'
	],
	[
		'PRECISION',
		'When targeting an Attached unit, the attacking model’s player can have the attack allocated to a Character model in that unit visible to the bearer.'
	],
	[
		'ANTI-CHAOS',
		'[ANTI-KEYWORD X+]: An unmodified Wound roll of ‘x+’ against a target with the matching keyword scores a Critical Wound'
	],
	[
		'ANTI-INFANTRY',
		'[ANTI-KEYWORD X+]: An unmodified Wound roll of ‘x+’ against a target with the matching keyword scores a Critical Wound'
	],
	[
		'ANTI-PSYKER',
		'[ANTI-KEYWORD X+]: An unmodified Wound roll of ‘x+’ against a target with the matching keyword scores a Critical Wound'
	],
	[
		'PISTOL',
		[
			'Can be shot even if the bearer’s unit is within Engagement Range of enemy units, but must target one of those enemy units.',
			'Cannot be shot alongside any other non-Pistol weapon (except by a Monster or Vehicle).'
		]
	],
	[
		'IGNORES COVER',
		'Weapons with [IGNORES COVER] in their profile are known as Ignores Cover weapons. Each time an attack is made with such a weapon, the target cannot have the Benefit of Cover against that attack (pg 44).'
	],
	[
		'TORRENT',
		'Weapons with [TORRENT] in their profile are known as Torrent weapons. Each time an attack is made with such a weapon, that attack automatically hits the target.'
	],
	['MELTA', '[MELTA X]: Increase the Damage by ‘x’ when targeting units within half range.'],
	[
		'RAPID FIRE',
		'[RAPID FIRE X]: Increase the Attacks by ‘x’ when targeting units within half range.'
	],
	['ONE SHOT', 'The bearer can only shoot with this weapon once per battle.'],
	['HEAVY', 'Add 1 to Hit rolls if the bearer’s unit Remained Stationary this turn.'],
	[
		'BLAST',
		[
			'Add 1 to the Attacks characteristic for every five models in the target unit (rounding down).',
			'Can never be used against a target that is within Engagement Range of any units from the attacking model’s army (including its own).'
		]
	],
	['ASSAULT', 'Can be shot even if the bearer’s unit Advanced.'],
	[
		'INDIRECT FIRE',
		[
			' Can target and make attacks against units that are not visible to the attacking unit.',
			'If no models are visible in a target unit when it is selected, then when making an attack against that target with an Indirect Fire weapon, subtract 1 from that attack’s Hit roll and the target has the Benefit of Cover against that attack.'
		]
	]
]);
