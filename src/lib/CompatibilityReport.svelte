<fieldset>
	<legend class="h2">Compatibility</legend>

	<div class="empty:text-center">
		<CompatibilityFieldset
			label="Weakness"
			list1={{ label: '4x', list: weakness[1] }}
			list2={{ label: '2x', list: weakness_1 }}
		/>

		<CompatibilityFieldset
			label="Resistance"
			list1={{ label: '0.5x', list: resistance_1 }}
			list2={{ label: '0.25x', list: resistance[1] }}
		/>

		<CompatibilityFieldset
			label="Immunity"
			list1={{ label: '0x', list: immunity }}
		/>
	</div>
</fieldset>

<style>
	div:empty::before {
		content: 'No compatibility info';
		@apply text-ink/20 text-sm;
	}
</style>

<script>
	import CompatibilityFieldset from './CompatibilityFieldset.svelte'

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
