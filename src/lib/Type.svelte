<neo-type class="anim-zoom" title={name?.en} style:background-color="{color}80">
	{emoji}
</neo-type>

<style>
	neo-type {
		position: relative;
		display: inline-grid;
		place-content: center;
		aspect-ratio: 1;
		height: 1.5em;
		@apply rounded-full;
	}
</style>

<script>
	export let name, emoji, color
</script>
