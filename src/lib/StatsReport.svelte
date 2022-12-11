<dl>
	<dt>HP</dt>
	<dd></dd>
	<dt>Attack</dt>
	<dd></dd>
	<dt>Defense</dt>
	<dd></dd>
	<dt>Speed</dt>
	<dd></dd>
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 .5em;
	}

	dt {
		text-align: right;
	}
</style>

<script>
	import { type1, type2 } from '../routes/+page.svelte'

	export let types
</script>
