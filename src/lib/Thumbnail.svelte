<label class="cursor-pointer block p-2 border border-ink/10">
	<input bind:files type="file" accept="image/*" hidden />

	{#if image}
		<figure style:background-image="url({image})" />
	{:else}
		<p class="subdued">Click to add thumbnail</p>
	{/if}
</label>

<style>
	figure {
		display: block;
		width: 100%;
		aspect-ratio: 2;
		background: center/cover no-repeat;
	}
</style>

<script>
	export let files

	let image

	$: if (files) {
		for (const file of files) {
			image = URL.createObjectURL(file)
		}
	}
</script>
