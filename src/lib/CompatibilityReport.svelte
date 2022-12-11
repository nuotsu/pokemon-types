<dl>
	<dt>Weakness (4x):</dt>
	<dd>
		{#each weakness[1] as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
	<dt>Weakness (2x):</dt>
	<dd>
		{#each weakness[0].filter(w => !normal.includes(w) && !immunity.includes(w)) as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
	<dt>Resistance (0.5x):</dt>
	<dd>
		{#each resistance[0].filter(r => !normal.includes(r) && !immunity.includes(r)) as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
	<dt>Resistance (0.25x):</dt>
	<dd>
		{#each resistance[1] as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
	<dt>Immunity (0x):</dt>
	<dd>
		{#each immunity as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 .5em;
	}

	dt {
		text-align: right;
	}
</style>

<script>
	import { type1, type2 } from '../routes/+page.svelte'

	export let types

	$: weakness = getCompatibility('weakness', $type1, $type2)
	$: resistance = getCompatibility('resistance', $type1, $type2)
	$: immunity = getCompatibility('immunity', $type1, $type2).flatMap(i => i)
	$: normal = weakness[0].filter(([emoji]) => resistance[0].includes(emoji))

	function getCompatibility(c, t1, t2) {
		const list = [
			...types.find(type => type._id === t1)?.compatibility[c]?.map(type => type.emoji) || [],
			...types.find(type => type._id === t2)?.compatibility[c]?.map(type => type.emoji) || []
		]
		const instances = {}

		for (let i of list) {
			instances[i] = instances[i] ? instances[i] + 1 : 1
		}

		return [
			Object.entries(instances).filter(([, instance]) => instance === 1).map(([emoji]) => emoji),
			Object.entries(instances).filter(([, instance]) => instance === 2).map(([emoji]) => emoji),
		]
	}
</script>
