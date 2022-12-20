<header class="mb-4 px-4 text-center">
	<h1 class="h1">Neo Types</h1>

	<ul class="flex flex-wrap gap-4 justify-center">
		<li>
			<Dialog className="w-full max-w-xs p-0" trigger="Type list">
				<TypeList {types} />
			</Dialog>
		</li>
		<li>
			<Dialog trigger="Type chart">
				<TypeChart {types} />
			</Dialog>
		</li>
	</ul>
</header>

<section class="grid gap-4 max-w-sm mx-auto px-4">
	<Thumbnail/>

	<div class="grid grid-cols-2 gap-4">
		<TypeSelector label="Type 1" {types} bind:value={$select1} other={$select2} />
		<TypeSelector label="Type 2" {types} bind:value={$select2} other={$select1} />
	</div>

	<CompatibilityReport {type1} {type2} />
	<SpecReport {type1} {type2} {specs} />
</section>

<script>
	import Dialog from '$lib/Dialog.svelte'
	import TypeList from '$lib/TypeList.svelte'
	import TypeChart from '$lib/TypeChart.svelte'
	import Thumbnail from '$lib/Thumbnail.svelte'
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
