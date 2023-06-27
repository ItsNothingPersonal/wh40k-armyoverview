<script lang="ts">
	import DeploymentAbilityExplained from '@/components/DeploymentAbilityExplained.svelte';
	import FactionAbilityExplained from '@/components/FactionAbilityExplained.svelte';
	import InfoBubble from '@/components/InfoBubble.svelte';
	import { data } from '@/data/adeptaSororitas';
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

	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = [...$sortableData].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];
			if (aVal < bVal) {
				return -direction;
			} else if (aVal > bVal) {
				return direction;
			}
			return 0;
		});
		sortableData.set(sorted);
	}

	let hiddenDrawer = writable(true);
	let transitionParamsRight = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
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
		{#each $sortableData as unitData, index (unitData.name)}
			<TableBodyRow
				on:click={() => {
					selectedRow.set(unitData);
					hiddenDrawer.set(false);
				}}
				id="click"
			>
				<TableBodyCell>{unitData.name}</TableBodyCell>
				<TableBodyCell>{unitData.movement}''</TableBodyCell>
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

	<Heading tag="h3">Abilities</Heading>
	<div class="flex gap-2">
		<div>
			<P weight="bold">Core</P>
			<DeploymentAbilityExplained abilities={$selectedRow.abilities.core ?? []} />
			<P weight="bold">Faction</P>
			<FactionAbilityExplained ability={$selectedRow.abilities.faction} />
		</div>
	</div>
</Drawer>
