<h1>Neo Types</h1>

<details>
	<summary>Type Chart</summary>
	<TypeChart {types} />
</details>

<section>
	<TypeSelector label="Type 1:" {types} bind:value={$select1} other={$select2} />
	<TypeSelector label="Type 2:" {types} bind:value={$select2} other={$select1} />

	<CompatibilityReport {type1} {type2} />
	<SpecReport {type1} {type2} {specs} />
</section>

<script>
	import TypeChart from '$lib/TypeChart.svelte'
	import TypeSelector from '$lib/TypeSelector.svelte'
	import CompatibilityReport from '$lib/CompatibilityReport.svelte'
	import SpecReport from '$lib/SpecReport.svelte'

	export let data

	const { types, specs } = data

	$: type1 = types.find(t => t._id === $select1) || {}
	$: type2 = types.find(t => t._id === $select2) || {}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const [select1, select2] = [writable(''), writable('')]
</script>
