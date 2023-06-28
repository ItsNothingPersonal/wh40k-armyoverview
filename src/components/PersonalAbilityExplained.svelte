<script lang="ts">
	import type { Ability } from '@/types/ability';
	import { Heading, P } from 'flowbite-svelte';
	import WeaponAbilityExplained from './WeaponAbilityExplained.svelte';

	export let abilities: Required<Ability[]>;

	function parseForWeaponKeywords(text: string | number): Ability[] {
		if (typeof text === 'number') {
			return [];
		}
		const regex = /.*\[([a-zA-Z ]+) ?(\d+)?\].*/;
		const matches = regex.exec(text);
		let parsedWeaponKeywords: Ability[] = [];
		if (matches) {
			for (let index = 1; index < matches.length; index++) {
				parsedWeaponKeywords.push({
					name: matches[index].trim(),
					additionalInformation: matches[index + 1]
				});
				if (index + 1 <= matches.length) {
					index++;
				}
			}
		}
		return parsedWeaponKeywords;
	}
</script>

<div class="flex flex-col gap-1">
	{#each abilities as ability}
		<Heading tag="h5">
			{ability.name}
		</Heading>
		<P class="mb-1">{ability.additionalInformation}</P>
		{#if parseForWeaponKeywords(ability.additionalInformation ?? '').length > 0}
			<div class="flex gap-1">
				<P weight="bold">Keywords:</P>
				<WeaponAbilityExplained
					abilities={parseForWeaponKeywords(ability.additionalInformation ?? '')}
				/>
			</div>
		{/if}
	{/each}
</div>
