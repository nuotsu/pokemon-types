<dl>
	{#each specs as spec}
		<dt>{spec.name}</dt>
		<dd>
			<meter min="0" max="100" value={75} />
			{getPerformance(spec)}
		</dd>
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
	export let type1, type2, specs

	const up = 1.1
	const down = 0.9

	$: t1 = type1?.spec
	$: t2 = type2?.spec

	$: getPerformance = ({ name }) => {
		return [
			t1?.inc.name === name && '🔺',
			t1?.dec.name === name && '🔻',
			t2?.inc.name === name && '🔺',
			t2?.dec.name === name && '🔻',
		].filter(Boolean).join('')
	}
</script>
