<fieldset>
	<legend class="h2">Compatibility</legend>

	<h3 class="h3">Weakness</h3>
	<Compatibility label="4x" list={weakness[1]} />
	<Compatibility label="2x" list={weakness_1} />

	<h3 class="h3">Resistance</h3>
	<Compatibility label="0.5x" list={resistance_1} />
	<Compatibility label="0.25x" list={resistance[1]} />

	{#if immunity.length}
		<h3 class="h3">Immunity</h3>
		<Compatibility label="0x" list={immunity} />
	{/if}
</fieldset>

<style>
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 .5em;
	}

	h3:not(:first-of-type) {
		@apply border-t border-ink/10 mt-2;
	}
</style>

<script>
	import Compatibility from './Compatibility.svelte'

	export let type1, type2

	$: getCompatibility = c => {
		const list = [type1[c], type2[c]]
			.flatMap(i => i)
			.filter(Boolean)

		const instances = {}
		for (let { emoji, ...type } of list) {
			instances[emoji] = [
				instances[emoji] ? instances[emoji][0] + 1 : 1,
				type
			]
		}

		return [
			processInstances(instances, 1),
			processInstances(instances, 2),
		]
	}

	$: weakness = getCompatibility('weakness')
	$: resistance = getCompatibility('resistance')
	$: immunity = getCompatibility('immunity').flatMap(i => i)
	$: normal = weakness[0].filter(({ emoji }) => processEmoji(resistance[0], emoji))

	$: weakness_1 = weakness[0].filter(({ emoji }) => !processEmoji(normal, emoji) && !processEmoji(immunity, emoji))
	$: resistance_1 = resistance[0].filter(({ emoji }) => !processEmoji(normal, emoji) && !processEmoji(immunity, emoji))

	function processInstances(instances, count) {
		return Object.entries(instances)
			.filter(([, [instance]]) => instance === count)
			.map(([emoji, [, type]]) => ({ emoji, ...type }))
	}

	function processEmoji(list, emoji) {
		return list.map(t => t.emoji).includes(emoji)
	}
</script>
