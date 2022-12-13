<dl>
	<dt>Weakness (4x):</dt>
	<dd>
		{#each weakness[1] as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
	<dt>Weakness (2x):</dt>
	<dd>
		{#each weakness_1 as emoji}
			<span>{emoji}</span>
		{/each}
	</dd>
	<dt>Resistance (0.5x):</dt>
	<dd>
		{#each resistance_1 as emoji}
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
	export let type1, type2

	$: getCompatibility = (c) => {
		const list = [
			type1[c]?.map(t => t.emoji),
			type2[c]?.map(t => t.emoji),
		].flatMap(i => i).filter(Boolean)

		const instances = {}
		for (let i of list) {
			instances[i] = instances[i] ? instances[i] + 1 : 1
		}

		return [
			Object.entries(instances).filter(([, instance]) => instance === 1).map(([emoji]) => emoji),
			Object.entries(instances).filter(([, instance]) => instance === 2).map(([emoji]) => emoji),
		]
	}

	$: weakness = getCompatibility('weakness')
	$: resistance = getCompatibility('resistance')
	$: immunity = getCompatibility('immunity').flatMap(i => i)
	$: normal = weakness[0].filter(([emoji]) => resistance[0].includes(emoji))

	$: weakness_1 = weakness[0].filter(w => !normal.includes(w) && !immunity.includes(w))
	$: resistance_1 = resistance[0].filter(r => !normal.includes(r) && !immunity.includes(r))
</script>
