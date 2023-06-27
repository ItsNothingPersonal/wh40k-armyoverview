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
			core: [{ name: 'Deadly Demise', modifier: 1 }, { name: 'Leader' }],
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Leader' }, { name: 'Scouts', modifier: 6 }],
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Deadly Demise', modifier: 1 }, { name: 'Leader' }],
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Feel No Pain', modifier: 5 }],
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Feel No Pain', modifier: 5 }],
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Scouts', modifier: 6 }],
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
			faction: 'Acts of Faith'
		}
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
				{ name: 'Deadly Demise', modifier: 1 },
				{ name: 'Feel No Pain', modifier: 5 }
			],
			faction: 'Acts of Faith'
		}
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
				{ name: 'Deadly Demise', modifier: 1 },
				{ name: 'Feel No Pain', modifier: 5 }
			],
			faction: 'Acts of Faith'
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
			core: [{ name: 'Deadly Demise', modifier: 'D3' }],
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Deadly Demise', modifier: 'D3' }],
			faction: 'Acts of Faith'
		}
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
				{ name: 'Deadly Demise', modifier: 'D3' },
				{ name: 'Firing Deck', modifier: 2 }
			],
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Deadly Demise', modifier: 'D3' }],
			faction: 'Acts of Faith'
		}
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
			core: [{ name: 'Feel No Pain', modifier: 4 }],
			faction: 'Acts of Faith'
		}
	}
];
