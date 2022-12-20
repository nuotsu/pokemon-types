{#if list1?.list.length || list2?.list.length}
	<div>
		<h3 class="h3">{label}</h3>

		<Compatibility {...list1} />

		{#if list2}
			<Compatibility {...list2} />
		{/if}
	</div>
{/if}

<style>
	div:not(:first-of-type) {
		@apply border-t border-ink/10 mt-2;
	}
</style>

<script>
	import Compatibility from './Compatibility.svelte'

	export let label, list1, list2
</script>
