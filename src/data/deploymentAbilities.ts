export const deploymentAbilities = new Map<string, string[]>([
	[
		'Leader',
		[
			'Before the battle, Character units with the Leader ability can be attached to one of their Bodyguard units to form an Attached unit.',
			'Attached units can only contain one Leader.',
			'Attacks cannot be allocated to Character models in Attached units.'
		]
	],
	[
		'Deadly Demise',
		[
			'Deadly Demise x: When this model is destroyed, roll one D6. On a 6, each unit within 6" suffers ‘x’ mortal wounds'
		]
	],
	[
		'Scouts',
		[
			'Scouts x": Unit can make a Normal move of up to x" before the first turn begins.',
			'If embarked in a Dedicated Transport, that Dedicated Transport can make this move instead.',
			'Must end this move more than 9" horizontally away from all enemy models'
		]
	],
	[
		'Deep Strike',
		[
			'Unit can be set up in Reserves instead of on the battlefield.',
			'Unit can be set up in your Reinforcements step, more than 9" horizontally away from all enemy models.'
		]
	],
	[
		'Fights First',
		[
			'Units with this ability that are eligible to fight do so in the Fights First step, provided every model in the unit has this ability.'
		]
	],
	[
		'Lone Operative',
		[
			'Unless part of an Attached unit (see Leader, page 39), this unit can only be selected as the target of a ranged attack if the attacking model is within 12".'
		]
	],
	[
		'Feel No Pain',
		[
			'Feel No Pain x+: Each time this model would lose a wound, roll one D6: if the result equals or exceeds ‘x’, that wound is not lost.'
		]
	],
	[
		'Firing Deck',
		[
			'Firing Deck ‘x’: Each time this Transport shoots, select one weapon from up to ‘x’ models embarked within it; this Transport counts as being equipped with those weapons as well.'
		]
	]
]);
