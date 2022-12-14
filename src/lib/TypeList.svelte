{#each types as { emoji, name, spec }}
	<details>
		<summary>
			<Type {emoji} {name} />

			{#if name.en === 'H2O'}
				<span>H<sub>2</sub>O</span>
			{:else}
				{name.en}
			{/if}

			{#if name.jp}
				<small>{name.jp}</small>
			{/if}
		</summary>

		<dl>
			<dt>Spec</dt>
			<dd>🔺 {spec.inc.name}</dd>

			<dt></dt>
			<dd>🔻 {spec.dec.name}</dd>
		</dl>
	</details>
{/each}

<style>
	details {
		text-align: left;
	}

	summary {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: .5em 1em;
		padding: 0.5em 1em;
		@apply bg-paper/80 backdrop-blur-sm hover:bg-accent/80 hover:text-paper;
	}

	details[open] summary {
		font-weight: bold;
	}

	summary :global(neo-type) {
		@apply text-3xl;
	}

	small {
		font-size: x-small;
	}

	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 1em;
		padding: .5em 1em;
		margin-left: 1em;
		margin-bottom: 1em;
		@apply border-l border-b border-ink/10;
	}
</style>

<script>
	import Type from './Type.svelte'

	export let types
</script>
