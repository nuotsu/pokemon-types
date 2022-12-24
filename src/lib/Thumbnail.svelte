<label class="cursor-pointer block" class:image>
	<input bind:files type="file" accept="image/*" hidden />

	{#if image}
		{#key image}
			<figure
				bind:this={card}
				class="anim-zoom"
				style:background-image="url({image})"
			/>
		{/key}
	{:else}
		<p class="grid subdued">
			<span class="text-3xl">📷</span>
			Click to add thumbnail
		</p>
	{/if}
</label>

<style>
	figure {
		display: block;
		width: 100%;
		aspect-ratio: 2;
		background: center/cover no-repeat;
		@apply rounded-md shadow-xl;
	}

	label:not(.image) {
		@apply p-2 border border-ink/10;
	}
</style>

<script>
	import Tilt from 'vanilla-tilt'

	export let files

	let image, card

	$: if (files) {
		for (const file of files) {
			image = URL.createObjectURL(file)
		}
	}

	$: if (card) {
		Tilt.init(card, {
			reverse: true,
			glare: true,
			'max-glare': .5,
			gyroscope: true,
		})
	}
</script>
