<script lang="ts">
	import { weaponKeywords } from '@/data/weaponKeywords';
	import type { Ability } from '@/types/ability';
	import { Li, List, P, Popover } from 'flowbite-svelte';

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
				{#if Array.isArray(weaponKeywords.get(ability.name))}
					<List tag="ul" class="space-y-1 text-left" position="outside">
						{#each weaponKeywords.get(ability.name) ?? [] as explanation}
							<Li><P>{explanation}</P></Li>
						{/each}
					</List>
				{:else}
					<P>{weaponKeywords.get(ability.name)}</P>
				{/if}
			</Popover>
		{:else}
			<P>{ability.name}{' '}</P>
		{/if}
	{/each}
</div>
