<script lang="ts">
	import { factionAbilities } from '@/data/factionAbilities';
	import { P, Popover } from 'flowbite-svelte';

	export let ability: string;
</script>

<div class="flex gap-1 mb-3">
	{#if factionAbilities.get(ability)}
		<P class="underline decoration-dotted" id={ability.replaceAll(' ', '_')}>
			{ability}
			{' '}
		</P>
		<Popover
			class="w-72 text-sm font-light px-1"
			triggeredBy={`#${ability.replaceAll(' ', '_')}`}
			placement="bottom"
		>
			<P>{factionAbilities.get(ability)}</P>
		</Popover>
	{:else}
		<P>{ability}{' '}</P>
	{/if}
</div>
