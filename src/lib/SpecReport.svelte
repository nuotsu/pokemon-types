<article>
	<h2 class="h2">Spec</h2>

	<dl>
		{#each specs as spec}
			{@const factor = getSpec(spec)}

			<dt>{spec.name}</dt>
			<dd>
				<meter min="0" max="100" value={75 * factor.value} />
				{factor.arrows}
			</dd>
		{/each}
	</dl>
</article>

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

	const FACTOR = 0.1
	const UP = 1 + FACTOR
	const DOWN = 1 - FACTOR

	$: getSpec = ({ name }) => {
		const list = [
			type1?.spec?.inc.name === name && { factor: UP, display: '🔺' },
			type1?.spec?.dec.name === name && { factor: DOWN, display: '🔻' },
			type2?.spec?.inc.name === name && { factor: UP, display: '🔺' },
			type2?.spec?.dec.name === name && { factor: DOWN, display: '🔻' },
		].filter(Boolean)

		return {
			arrows: list.map(i => i.display).join(''),
			value: Number(list
				.filter(Boolean)
				.map(i => i.factor)
				.reduce((acc, cur) => acc * cur, 1)
				.toFixed(1)
			)
		}
	}
</script>
