<fieldset>
	<legend class="h2">Spec</legend>

	<dl>
		{#each specs as spec}
			{@const factor = getSpec(spec)}

			<dt>{spec.name}</dt>
			<dd>
				<meter style:--color={spec.color} min="0" max="100" value={75 * factor.value} />
				{factor.arrows}
			</dd>
		{/each}
	</dl>
</fieldset>

<style>
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 .5em;
	}

	dt {
		text-align: right;
	}

	dd {
		display: grid;
		grid-template-columns: 1fr 2.5em;
		gap: 0 .5em;
		align-items: center;
	}

	meter {
		-moz-appearance: none;
		width: 100%;
		height: .5em;
		background: none;
		overflow: hidden;
		@apply bg-ink/10 rounded-full;
	}

	meter::-webkit-meter-bar {
		background: none;
		border: 0;
		height: .5em;
	}

	meter::-webkit-meter-optimum-value {
		background: none;
		background-color: var(--color);
		background-size: 100% 100%;
		transition: width .5s;
	}

	meter::-moz-meter-bar {
		background: none;
		background-color: var(--color);
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
