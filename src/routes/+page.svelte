<script lang="ts">
	import { data } from '@/data/adeptaSororitas';
	import type { Unit } from '@/types/unit';
	import {
		ChevronDown,
		ChevronUp,
		Heading,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
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
</script>

<Heading tag="h1">W40K - Army Overview</Heading>
<Heading tag="h2" class="p-4">{$selectedArmy}</Heading>
<Table hoverable shadow>
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
			Objective control
			{#if $sortDirection === 1 && $sortKey === 'objectiveControl'}
				<ChevronDown size="15" />
			{:else if $sortKey === 'objectiveControl'}
				<ChevronUp size="15" />
			{/if}
		</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each $sortableData as unitData (unitData.name)}
			<TableBodyRow>
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
