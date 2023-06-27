import type { Unit } from '@/types/unit';

export const data: readonly Unit[] = [
	{
		name: 'Morven Vahl',
		movement: 8,
		toughness: 6,
		save: 2,
		wounds: 8,
		leadership: 6,
		objectiveControl: 2,
		abilities: {
			core: [{ name: 'Deadly Demise', additionalInformation: 1 }, { name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Abbess Sanctorum',
					additionalInformation:
						'While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll and you can re-roll the Wound roll.'
				},
				{
					name: 'Righteous Repugnance',
					additionalInformation:
						'Once per battle, in your Command phase, this model can use this ability. If it does, until the start of your next Command phase, add 3 to the Attacks characteristic of Fidelis and the Lance of Illumination'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Canoness',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 4,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Lead the Righteous',
					additionalInformation:
						'While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll.'
				},
				{
					name: 'The Emperor’s Grace',
					additionalInformation:
						'Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 2+ invulnerable save.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Palatine',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 3,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }, { name: 'Scouts', additionalInformation: 6 }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Fury of the Righteous',
					additionalInformation:
						'While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.'
				},
				{
					name: 'Rapturous Blows',
					additionalInformation:
						'Each time this model’s unit is selected to fight, you can discard one Miracle dice. If you do, then until the end of the phase, each time a melee attack made by this model scores a wound, ' +
						'the target of that attack suffers 1 mortal wound in addition to any normal damage.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Junith Eruita',
		movement: 6,
		toughness: 4,
		save: 2,
		wounds: 6,
		leadership: 6,
		objectiveControl: 2,
		abilities: {
			core: [{ name: 'Deadly Demise', additionalInformation: 1 }, { name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'The Pulpit of Saint Holline’s Basilica',
					additionalInformation:
						'While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.'
				},
				{
					name: 'Fiery Conviction',
					additionalInformation:
						'If this model is on the battlefield at the start of your Command phase, you gain 1CP.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Missionary',
		movement: 6,
		toughness: 3,
		save: 6,
		wounds: 3,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'War Hymn',
					additionalInformation:
						'While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.'
				},
				{
					name: 'Holy Piety',
					additionalInformation:
						'Each time this model makes a melee attack, unless this model’s unit is Battle-shocked, you can re-roll the Hit roll.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Saint Celestine',
		movement: 6,
		toughness: 3,
		save: 2,
		wounds: 5,
		leadership: 6,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Deep Strike' }, { name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Healing Tears',
					additionalInformation:
						'While this unit contains a Celestine model, in your Command phase, if this unit is below its Starting Strength, 1 destroyed model is returned to this unit.'
				},
				{
					name: 'Lifewards',
					additionalInformation:
						'While this unit contains one or more Geminae Superia models, Celestine has the Feel No Pain 4+ ability'
				},
				{
					name: 'Miraculous Intervention',
					additionalInformation:
						'The first time this unit’s Celestine model is destroyed, roll one D6 at the end of the phase. On a 2+, set that Celestine model back up on the battlefield, as ' +
						'close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Triumph of Saint Katherine',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 18,
		leadership: 6,
		objectiveControl: 6,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Relics of the Matriarchs',
					additionalInformation:
						'At the start of the battle round, select up to two of the abilities in the Relics of the Matriarchs section (see left). Until the start of the next battle round, this model has those abilities.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Ephrael Stern',
		movement: 8,
		toughness: 3,
		save: 3,
		wounds: 5,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Deep Strike' }, { name: 'Fights First' }, { name: 'Lone Operative' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Holy Judgement',
					additionalInformation:
						'At the start of your Shooting phase, select one enemy unit within 12" of and visible to Ephrael Stern. That unit must take a Leadership test, subtracting 2 from the result if it is a Chaos unit. ' +
						'If the test is failed, that enemy unit suffers 3 mortal wounds.'
				},
				{
					name: 'Mysterious Saviours',
					additionalInformation:
						'You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Kyganil of the Bloody Tears',
		movement: 8,
		toughness: 3,
		save: 6,
		wounds: 3,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Deep Strike' }, { name: 'Fights First' }, { name: 'Lone Operative' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Mysterious Saviours',
					additionalInformation:
						'You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Battle Sister Squad',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Cherub',
					additionalInformation:
						'Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice.'
				},
				{
					name: 'Defenders of the Faith',
					additionalInformation:
						'At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, you gain 1 Miracle dice.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Novitiate Superior',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Impetuous Fervour',
					additionalInformation:
						'Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Sister Novitiate',
		movement: 6,
		toughness: 3,
		save: 4,
		wounds: 1,
		leadership: 8,
		objectiveControl: 2,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Impetuous Fervour',
					additionalInformation:
						'Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Aestred Thurga',
		movement: 6,
		toughness: 3,
		save: 2,
		wounds: 4,
		leadership: 6,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Auto-Tapestry of the Emperor’s Judgement',
					additionalInformation:
						'While Aestred Thurga is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Agathae Dolan',
		movement: 6,
		toughness: 3,
		save: 6,
		wounds: 3,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Recount the Deeds of the Saints',
					additionalInformation:
						'While Agathae Dolan is part of this unit, each time this unit performs an Act of Faith, the result of one of the Miracle dice used in that Act of Faith is first improved by 1 (to a maximum of 6)'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Imagifier',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 3,
		leadership: 6,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Litany of Deeds',
					additionalInformation:
						'Each time you gain a Miracle dice as the result of a friendly Adepta Sororitas unit being destroyed, if that unit was destroyed within 12" of this model, you can re-roll ' +
						'the result of that Miracle dice before adding it to your Miracle dice pool.'
				},
				{
					name: 'Stanchion of Holy Martyrs',
					additionalInformation:
						'While this model is leading a unit, models in that unit have a 4+ invulnerable save. While this model is leading a Celestian Sacresants unit, models in that unit have a Save characteristic of 2+.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Dialogus',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 3,
		leadership: 6,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Laud Hailer',
					additionalInformation:
						'While this model is leading a unit, that unit can be selected as the target of Stratagems even when it is Battle-shocked.'
				},
				{
					name: 'Stirring Rhetoric',
					additionalInformation:
						'While this model is leading a unit, each time this model’s unit performs an Act of Faith, the result of one of the Miracle dice used in that Act of Faith is first changed to a 6.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Preacher',
		movement: 6,
		toughness: 3,
		save: 6,
		wounds: 3,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Righteous Smiting',
					additionalInformation:
						'While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll.'
				},
				{
					name: 'Zealot',
					additionalInformation:
						'Once per battle, in the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength and Attacks characteristics of melee weapons equipped by this model by 2.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Celestian Sacresants',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Sworn Protectors',
					additionalInformation:
						'While a Canoness, Palatine or Junith Eruita model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Hospitaller',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 3,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Medicus Ministorum',
					additionalInformation:
						'While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability'
				},
				{
					name: 'Sacred Healing',
					additionalInformation:
						'At the end of your Movement phase, select one friendly Adepta Sororitas Infantry Character unit within 3" of this model. That unit regains up to 3 lost wounds. ' +
						'A unit can only be affected by this ability once per turn.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Dogmata',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 3,
		leadership: 6,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Leader' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Executioner of Heretics (Aura)',
					additionalInformation:
						'While an enemy unit is within 6" of this model, each time a Battle-shock or Leadership test is taken for that unit, subtract 1 from the test.'
				},
				{
					name: 'Unflinching Determination',
					additionalInformation:
						'While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Paragon Warsuits',
		movement: 8,
		toughness: 6,
		save: 2,
		wounds: 4,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Righteous Paragons',
					additionalInformation:
						'This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Repentia Superior',
		movement: 7,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Feel No Pain', additionalInformation: 5 }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Overseer of Redemption',
					additionalInformation:
						'While this unit contains a Repentia Superior, each time a model in this unit makes a melee attack, you can re-roll the Hit roll and, ' +
						'if this unit made a Charge move this turn, you can also re-roll the Wound roll.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Sisters Repentia',
		movement: 7,
		toughness: 3,
		save: 7,
		wounds: 1,
		leadership: 8,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Feel No Pain', additionalInformation: 5 }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Overseer of Redemption',
					additionalInformation:
						'While this unit contains a Repentia Superior, each time a model in this unit makes a melee attack, you can re-roll the Hit roll and, ' +
						'if this unit made a Charge move this turn, you can also re-roll the Wound roll.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Crusaders',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Spiritual Fortitude',
					additionalInformation:
						'While a Missionary or Preacher model is leading this unit, models in this unit have the Feel No Pain 4+ ability against mortal wounds.'
				}
			]
		},
		invulnerableSave: 4
	},
	{
		name: 'Death Cult Assassins',
		movement: 7,
		toughness: 3,
		save: 5,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Fights First' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Death Cult',
					additionalInformation:
						'Each time a model in this unit makes an attack that targets a Character unit, re-roll a Wound roll of 1.'
				}
			]
		},
		invulnerableSave: 5
	},
	{
		name: 'Dominion Squad',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Scouts', additionalInformation: 6 }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Cherub',
					additionalInformation:
						'Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice.'
				},
				{
					name: 'Holy Vanguard',
					additionalInformation: 'You can re-roll Advance rolls made for this unit.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Seraphim Squad',
		movement: 12,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Deep Strike' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Angelic Ascent',
					additionalInformation:
						'In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to 6". ' +
						'If it does, until the end of the turn, this unit is not eligible to declare a charge.'
				}
			]
		},
		invulnerableSave: 5
	},
	{
		name: 'Zephyrim Squad',
		movement: 12,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Deep Strike' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Embodied Prophecy',
					additionalInformation:
						'Each time a model in this unit makes a melee attack, if this unit made a Charge move this turn, add 1 to the Strength characteristic of that attack.'
				}
			]
		},
		invulnerableSave: 5
	},
	{
		name: 'Retributor Squad',
		movement: 6,
		toughness: 3,
		save: 3,
		wounds: 1,
		leadership: 7,
		objectiveControl: 1,
		abilities: {
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Cherubs',
					additionalInformation:
						'Twice per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice.'
				},
				{
					name: 'Storm of Retribution',
					additionalInformation:
						'Each time a model in this unit makes a ranged attack, re-roll a Wound roll of 1'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Mortifiers',
		movement: 8,
		toughness: 6,
		save: 4,
		wounds: 5,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			core: [
				{ name: 'Deadly Demise', additionalInformation: 1 },
				{ name: 'Feel No Pain', additionalInformation: 5 }
			],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Anguish of the Unredeemed',
					additionalInformation:
						'Each time this unit makes a Charge move, until the end of the phase, melee weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Penitent Engines',
		movement: 8,
		toughness: 6,
		save: 4,
		wounds: 5,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			core: [
				{ name: 'Deadly Demise', additionalInformation: 1 },
				{ name: 'Feel No Pain', additionalInformation: 5 }
			],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Endless Suffering',
					additionalInformation:
						'This unit is eligible to declare a charge in a turn in which it Advanced.'
				}
			]
		}
	},
	{
		name: 'Exorcist',
		movement: 10,
		toughness: 10,
		save: 3,
		wounds: 11,
		leadership: 7,
		objectiveControl: 3,
		abilities: {
			core: [{ name: 'Deadly Demise', additionalInformation: 'D3' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Mobile Shrine (Aura)',
					additionalInformation:
						'While a friendly Adepta Sororitas Infantry unit is within 6" of this model, improve the Leadership characteristic of models in that unit by 1.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Castigator',
		movement: 10,
		toughness: 10,
		save: 3,
		wounds: 11,
		leadership: 7,
		objectiveControl: 3,
		abilities: {
			core: [{ name: 'Deadly Demise', additionalInformation: 'D3' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Rites of Castigation',
					additionalInformation:
						'Each time this model makes an attack with its Castigator autocannons that targets an enemy Infantry unit, you can re-roll the Hit roll. ' +
						'Each time this model makes an attack with its Castigator battle cannon that targets an enemy Monster or Vehicle unit, you can re-roll the Hit roll. ' +
						'After this model has shot, select one enemy unit that was hit by its Castigator autocannons or Castigator battle cannon this phase. That unit must take a Battle-shock test.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Sororitas Rhino',
		movement: 12,
		toughness: 9,
		save: 3,
		wounds: 10,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			core: [
				{ name: 'Deadly Demise', additionalInformation: 'D3' },
				{ name: 'Firing Deck', additionalInformation: 2 }
			],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Self Repair',
					additionalInformation:
						'At the start of your Command phase, this model regains 1 lost wound.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Immolator',
		movement: 12,
		toughness: 10,
		save: 3,
		wounds: 11,
		leadership: 7,
		objectiveControl: 2,
		abilities: {
			core: [{ name: 'Deadly Demise', additionalInformation: 'D3' }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Fire Support',
					additionalInformation:
						'In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, ' +
						'each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.'
				}
			]
		},
		invulnerableSave: 6
	},
	{
		name: 'Arco-Flagellants',
		movement: 7,
		toughness: 3,
		save: 7,
		wounds: 2,
		leadership: 8,
		objectiveControl: 1,
		abilities: {
			core: [{ name: 'Feel No Pain', additionalInformation: 4 }],
			faction: 'Acts of Faith',
			personal: [
				{
					name: 'Extremis Trigger Word',
					additionalInformation:
						'Each time this unit is selected to fight, you can choose to invoke its extremis trigger word. If you do, then until the end of the phase, arco-flails equipped ' +
						'by models in this unit have an Attacks characteristic of 6 and the [HAZARDOUS] ability.'
				}
			]
		}
	}
];
