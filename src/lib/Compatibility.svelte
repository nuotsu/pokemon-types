{#if list.length}
	<div>
		{#each list as type}
			<Type {...type} />
		{/each}
		<span>{label}</span>
	</div>
{/if}

<style>
	div {
		display: inline-flex;
		align-items: center;
		margin-right: 1em;
	}

	span {
		margin-left: .5em;
	}
</style>

<script>
	import Type from './Type.svelte'

	export let label, list
</script>
