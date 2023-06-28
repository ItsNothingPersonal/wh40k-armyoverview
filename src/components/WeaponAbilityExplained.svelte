<script lang="ts">
	import { weaponKeywords } from '@/data/weaponKeywords';
	import type { Ability } from '@/types/ability';
	import { P, Popover } from 'flowbite-svelte';

	export let abilities: Ability[];
</script>

<div class="flex gap-1 mb-3">
	{#each abilities as ability}
		{#if weaponKeywords.get(ability.name)}
			<P class="underline decoration-dotted" id={ability.name.replaceAll(' ', '_')}>
				{ability.name}
				{#if ability.additionalInformation}
					{' '}{ability.additionalInformation}
				{/if}
				{' '}
			</P>
			<Popover
				class="w-72 text-sm font-light px-1"
				triggeredBy={`#${ability.name.replaceAll(' ', '_')}`}
				placement="bottom"
			>
				<P>{weaponKeywords.get(ability.name)}</P>
			</Popover>
		{:else}
			<P>{ability.name}{' '}</P>
		{/if}
	{/each}
</div>
