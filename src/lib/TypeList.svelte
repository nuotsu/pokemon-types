{#each types as { emoji, name, color, spec }}
	<details>
		<summary style:--color="{color}aa">
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

		<dl style:border-color={color}>
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
		@apply bg-paper/80 backdrop-blur-sm hover:bg-[var(--color)];
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
		margin-left: .5em;
		margin-bottom: 1em;
		border-left: 1px solid;
		border-bottom: 1px solid;
	}
</style>

<script>
	import Type from './Type.svelte'

	export let types
</script>
