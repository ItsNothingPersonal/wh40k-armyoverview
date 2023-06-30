<script lang="ts">
	import DeploymentAbilityExplained from '@/components/DeploymentAbilityExplained.svelte';
	import FactionAbilityExplained from '@/components/FactionAbilityExplained.svelte';
	import InfoBubble from '@/components/InfoBubble.svelte';
	import PersonalAbilityExplained from '@/components/PersonalAbilityExplained.svelte';
	import WeaponAbilityExplained from '@/components/WeaponAbilityExplained.svelte';
	import { data } from '@/data/adeptaSororitas';
	import { meleeWeapons } from '@/data/meleeWeapons';
	import { rangedWeapons } from '@/data/rangedWeapons';
	import type { MeleeWeapon } from '@/types/meleeWeapon';
	import type { RangedWeapon } from '@/types/rangedWeapon';
	import type { Unit } from '@/types/unit';
	import {
		ChevronDown,
		ChevronUp,
		CloseButton,
		Drawer,
		Heading,
		P,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { writable } from 'svelte/store';

	const sortableData = writable(JSON.parse(JSON.stringify(data)) as Unit[]);
	const sortKey = writable<keyof Unit>('name'); // default sort key
	const sortDirection = writable(1); // default sort direction (ascending)
	const sortTable = (prop: keyof Unit) => {
		// If the same key is clicked, reverse the sort direction
		if ($sortKey === prop) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(prop);
			sortDirection.set(1);
		}
	};
	const selectedArmy = writable('Adepta Sororitas');
	const selectedRow = writable<Unit>();

	const sortableMeleeData = writable([] as MeleeWeapon[]);
	const sortKeyMelee = writable<keyof MeleeWeapon>('name'); // default sort key
	const sortDirectionMelee = writable(1); // default sort direction (ascending)
	const sortTableMelee = (prop: keyof MeleeWeapon) => {
		// If the same key is clicked, reverse the sort direction
		if ($sortKeyMelee === prop) {
			sortDirectionMelee.update((val) => -val);
		} else {
			sortKeyMelee.set(prop);
			sortDirectionMelee.set(1);
		}
	};

	const sortableRangedData = writable([] as RangedWeapon[]);
	const sortKeyRanged = writable<keyof RangedWeapon>('name'); // default sort key
	const sortDirectionRanged = writable(1); // default sort direction (ascending)
	const sortTableRanged = (prop: keyof RangedWeapon) => {
		// If the same key is clicked, reverse the sort direction
		if ($sortKeyRanged === prop) {
			sortDirectionRanged.update((val) => -val);
		} else {
			sortKeyRanged.set(prop);
			sortDirectionRanged.set(1);
		}
	};

	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = [...$sortableData].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];
			if (aVal === undefined || bVal === undefined) {
				return 0;
			}

			if (aVal < bVal) {
				return -direction;
			} else if (aVal > bVal) {
				return direction;
			}
			return 0;
		});
		sortableData.set(sorted);

		sortableMeleeData.set(getMeleeWeaponsForUnit($selectedRow));
		const keyMelee = $sortKeyMelee;
		const directionMelee = $sortDirectionMelee;
		const sortedMelee = [...$sortableMeleeData].sort((aMelee, bMelee) => {
			const aVal = aMelee[keyMelee];
			const bVal = bMelee[keyMelee];
			if (aVal === undefined || bVal === undefined) {
				return 0;
			}

			if (aVal < bVal) {
				return -directionMelee;
			} else if (aVal > bVal) {
				return directionMelee;
			}
			return 0;
		});
		sortableMeleeData.set(sortedMelee);

		sortableRangedData.set(getRangedWeaponsForUnit($selectedRow));
		const keyRanged = $sortKeyRanged;
		const directionRanged = $sortDirectionRanged;
		const sortedRanged = [...$sortableRangedData].sort((aRanged, bRanged) => {
			const aVal = aRanged[keyRanged];
			const bVal = bRanged[keyRanged];
			if (aVal === undefined || bVal === undefined) {
				return 0;
			}

			if (aVal < bVal) {
				return -directionRanged;
			} else if (aVal > bVal) {
				return directionRanged;
			}
			return 0;
		});
		sortableRangedData.set(sortedRanged);
	}

	let hiddenDrawer = writable(true);
	let transitionParamsRight = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	function getMeleeWeaponsForUnit(unit: Unit | undefined): MeleeWeapon[] {
		const returnArr: MeleeWeapon[] = [];

		unit?.meleeWeapons.forEach((weapon) => {
			const configuredData = meleeWeapons.get(weapon);
			if (configuredData === undefined) return;
			if (!Array.isArray(configuredData)) {
				returnArr.push(configuredData);
				return;
			}

			const filteredData = configuredData.find((data) => data.ownedBy.includes(unit.name));
			if (filteredData === undefined) {
				return;
			}

			returnArr.push(filteredData);
		});

		return returnArr;
	}

	function getRangedWeaponsForUnit(unit: Unit | undefined): RangedWeapon[] {
		const returnArr: RangedWeapon[] = [];

		unit?.rangeWeapons.forEach((weapon) => {
			const configuredData = rangedWeapons.get(weapon);
			if (configuredData === undefined) return;
			if (!Array.isArray(configuredData)) {
				returnArr.push(configuredData);
				return;
			}

			const filteredData = configuredData.find((data) => data.ownedBy.includes(unit.name));
			if (filteredData === undefined) {
				return;
			}

			returnArr.push(filteredData);
		});

		return returnArr;
	}
</script>

<Heading tag="h1">W40K - Army Overview</Heading>
<Heading tag="h2" class="p-4">{$selectedArmy}</Heading>
<Table hoverable shadow divClass="w-full overflow-x-auto">
	<TableHead>
		<TableHeadCell on:click={() => sortTable('name')}>
			<div class="flex items-center gap-1">
				Unit name
				{#if $sortDirection === 1 && $sortKey === 'name'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'name'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click={() => sortTable('movement')}>
			<div class="flex items-center gap-1">
				Movement
				{#if $sortDirection === 1 && $sortKey === 'movement'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'movement'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click={() => sortTable('toughness')}>
			<div class="flex items-center gap-1">
				Toughness
				{#if $sortDirection === 1 && $sortKey === 'toughness'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'toughness'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click={() => sortTable('save')}>
			<div class="flex items-center gap-1">
				Save
				{#if $sortDirection === 1 && $sortKey === 'save'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'save'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click={() => sortTable('wounds')}>
			<div class="flex items-center gap-1">
				Wounds
				{#if $sortDirection === 1 && $sortKey === 'wounds'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'wounds'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click={() => sortTable('leadership')}>
			<div class="flex items-center gap-1">
				Leadership
				{#if $sortDirection === 1 && $sortKey === 'leadership'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'leadership'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click={() => sortTable('objectiveControl')}>
			<div class="flex items-center gap-1">
				Objective control
				{#if $sortDirection === 1 && $sortKey === 'objectiveControl'}
					<ChevronDown size="15" />
				{:else if $sortKey === 'objectiveControl'}
					<ChevronUp size="15" />
				{/if}
			</div>
		</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="w-full min-w-full">
		{#each $sortableData as unitData (unitData.name)}
			<TableBodyRow
				on:click={() => {
					selectedRow.set(unitData);
					hiddenDrawer.set(false);
				}}
				id="click"
			>
				<TableBodyCell>{unitData.name}</TableBodyCell>
				<TableBodyCell>{unitData.movement}"</TableBodyCell>
				<TableBodyCell>{unitData.toughness}</TableBodyCell>
				<TableBodyCell>{unitData.save}+</TableBodyCell>
				<TableBodyCell>{unitData.wounds}</TableBodyCell>
				<TableBodyCell>{unitData.leadership}</TableBodyCell>
				<TableBodyCell>{unitData.objectiveControl}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>

<Drawer
	placement="right"
	transitionType="fly"
	transitionParams={transitionParamsRight}
	bind:hidden={$hiddenDrawer}
	id="infoSidebar"
	width="w-3/5"
>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			<InfoBubble />
			Info
		</h5>
		<CloseButton on:click={() => hiddenDrawer.set(true)} class="mb-4 dark:text-white" />
	</div>

	<Heading tag="h3" class="text-left">Abilities</Heading>
	<div class="flex gap-2 text-left mb-3">
		<div>
			{#if $selectedRow.abilities.core}
				<Heading tag="h4">Core</Heading>
				<DeploymentAbilityExplained abilities={$selectedRow.abilities.core} />
			{/if}
			<Heading tag="h4">Faction</Heading>
			<FactionAbilityExplained ability={$selectedRow.abilities.faction} />
			<Heading tag="h4">Personal</Heading>
			<PersonalAbilityExplained abilities={$selectedRow.abilities.personal} />
		</div>
	</div>

	{#if $selectedRow.invulnerableSave}
		<Heading tag="h3" class="text-left">Invulnerable Save</Heading>
		<P class="mb-3">{$selectedRow.invulnerableSave}+</P>
	{/if}

	<Heading tag="h3" class="text-left">Faction Keywords</Heading>
	<P class="mb-3">{$selectedRow.factionKeyword}</P>

	<Heading tag="h3" class="text-left">Keywords</Heading>
	<P class="mb-3">{$selectedRow.keywords.join(', ')}</P>

	<Table hoverable shadow divClass="w-full overflow-x-auto">
		<TableHead>
			<TableHeadCell on:click={() => sortTableMelee('name')}>
				<div class="flex items-center gap-1">
					Melee Weapons
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'name'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'name'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
			<TableHeadCell>
				<div class="flex items-center gap-1">Range</div>
			</TableHeadCell>
			<TableHeadCell on:click={() => sortTableMelee('attacks')}>
				<div class="flex items-center gap-1">
					Attacks
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'attacks'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'attacks'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
			<TableHeadCell on:click={() => sortTableMelee('weaponSkill')}>
				<div class="flex items-center gap-1">
					Weaponskill
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'weaponSkill'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'weaponSkill'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
			<TableHeadCell on:click={() => sortTableMelee('strength')}>
				<div class="flex items-center gap-1">
					Strength
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'strength'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'strength'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
			<TableHeadCell on:click={() => sortTableMelee('armourPenetration')}>
				<div class="flex items-center gap-1">
					Armour Penetration
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'armourPenetration'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'armourPenetration'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
			<TableHeadCell on:click={() => sortTableMelee('damage')}>
				<div class="flex items-center gap-1">
					Damage
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'damage'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'damage'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
			<TableHeadCell on:click={() => sortTableMelee('keywords')}>
				<div class="flex items-center gap-1">
					Keywords
					{#if $sortDirectionMelee === 1 && $sortKeyMelee === 'keywords'}
						<ChevronDown size="15" />
					{:else if $sortKeyMelee === 'keywords'}
						<ChevronUp size="15" />
					{/if}
				</div>
			</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="w-full min-w-full">
			{#each $sortableMeleeData as meleeWeapon}
				<TableBodyRow>
					<TableBodyCell>{meleeWeapon.name}</TableBodyCell>
					<TableBodyCell>Melee</TableBodyCell>
					<TableBodyCell>{meleeWeapon.attacks}</TableBodyCell>
					<TableBodyCell>{meleeWeapon.weaponSkill}+</TableBodyCell>
					<TableBodyCell>{meleeWeapon.strength}</TableBodyCell>
					<TableBodyCell>{meleeWeapon.armourPenetration}</TableBodyCell>
					<TableBodyCell>{meleeWeapon.damage}</TableBodyCell>
					<TableBodyCell>
						<WeaponAbilityExplained abilities={meleeWeapon.keywords ?? []} />
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>

	{#if getRangedWeaponsForUnit($selectedRow).length > 0}
		<Table hoverable shadow divClass="w-full overflow-x-auto mt-2">
			<TableHead>
				<TableHeadCell on:click={() => sortTableRanged('name')}>
					<div class="flex items-center gap-1">
						Ranged Weapons
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'name'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'name'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('range')}>
					<div class="flex items-center gap-1">
						Range
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'range'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'range'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('attacks')}>
					<div class="flex items-center gap-1">
						Attacks
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'attacks'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'attacks'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('ballisticSkill')}>
					<div class="flex items-center gap-1">
						Ballistic Skill
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'ballisticSkill'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'ballisticSkill'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('strength')}>
					<div class="flex items-center gap-1">
						Strength
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'strength'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'strength'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('armourPenetration')}>
					<div class="flex items-center gap-1">
						Armour Penetration
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'armourPenetration'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'armourPenetration'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('damage')}>
					<div class="flex items-center gap-1">
						Damage
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'damage'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'damage'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
				<TableHeadCell on:click={() => sortTableRanged('keywords')}>
					<div class="flex items-center gap-1">
						Keywords
						{#if $sortDirectionRanged === 1 && $sortKeyRanged === 'keywords'}
							<ChevronDown size="15" />
						{:else if $sortKeyRanged === 'keywords'}
							<ChevronUp size="15" />
						{/if}
					</div>
				</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="w-full min-w-full">
				{#each $sortableRangedData as rangedWeapon (rangedWeapon.name)}
					<TableBodyRow>
						<TableBodyCell>{rangedWeapon.name}</TableBodyCell>
						<TableBodyCell>{rangedWeapon.range}"</TableBodyCell>
						<TableBodyCell>{rangedWeapon.attacks}</TableBodyCell>
						<TableBodyCell>
							{#if rangedWeapon.ballisticSkill}
								{rangedWeapon.ballisticSkill}+
							{:else}
								n/a
							{/if}
						</TableBodyCell>
						<TableBodyCell>{rangedWeapon.strength}</TableBodyCell>
						<TableBodyCell>{rangedWeapon.armourPenetration}</TableBodyCell>
						<TableBodyCell>{rangedWeapon.damage}</TableBodyCell>
						<TableBodyCell>
							<WeaponAbilityExplained abilities={rangedWeapon.keywords ?? []} />
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	{/if}
</Drawer>
