<dt>{label}</dt>
<dd>
	{#each list as { emoji, name }}
		<span title={name.en}>{emoji}</span>
	{/each}
</dd>

<style>
	dt {
		text-align: right;
	}
</style>

<script>
	export let label, list
</script>
