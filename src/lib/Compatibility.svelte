<dt>{label}</dt>
<dd>
	{#each list as type}
		<Type {...type} />
	{/each}
</dd>

<style>
	dt {
		text-align: right;
	}
</style>

<script>
	import Type from './Type.svelte'

	export let label, list
</script>
