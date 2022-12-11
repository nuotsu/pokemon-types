<dl>
	{#each stats as stat}
		<dt>{stat}</dt>
		<dd>{getPerformance(stat)}</dd>
	{/each}
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

	const stats = ['HP', 'Attack', 'Defense', 'Speed']
	const up = 1.1
	const down = 0.9

	$: t1 = types.find(type => type._id === $type1)?.performance
	$: t2 = types.find(type => type._id === $type2)?.performance

	$: getPerformance = p => {
		return [
			t1?.inc === p && '🔺',
			t2?.inc === p && '🔺',
			t1?.dec === p && '🔻',
			t2?.dec === p && '🔻',
		].filter(Boolean).join('')
	}
</script>
