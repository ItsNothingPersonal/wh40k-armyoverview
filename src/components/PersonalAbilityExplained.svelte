<script lang="ts">
	import type { Ability } from '@/types/ability';
	import { Heading, P } from 'flowbite-svelte';

	export let abilities: Required<Ability[]>;
</script>

<div class="flex flex-col gap-1 mb-3">
	{#each abilities as ability}
		<Heading tag="h5">
			{ability.name}
		</Heading>
		<P class="mb-1">{ability.additionalInformation}</P>
	{/each}
</div>
