<h1>Neo Types</h1>

<details>
	<summary>Type Chart</summary>
	<TypeChart {types} />
</details>

<section>
	<TypeSelector label="Type 1:" {types} bind:value={$type1} other={$type2} />
	<TypeSelector label="Type 2:" {types} bind:value={$type2} other={$type1} />

	<CompatibilityReport {types} />
	<StatsReport {types} />
</section>

<script>
	import TypeChart from '$lib/TypeChart.svelte'
	import TypeSelector from '$lib/TypeSelector.svelte'
	import CompatibilityReport from '$lib/CompatibilityReport.svelte'
	import StatsReport from '$lib/StatsReport.svelte'

	export let data

	const { types } = data
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const [type1, type2] = [writable(''), writable('')]
</script>
