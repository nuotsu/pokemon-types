<div class="overflow-x-auto overflow-y-hidden p-px">
	<table bind:clientHeight style:--height="{clientHeight}px">
		<thead>
			<tr>
				<th><span>👉</span></th>
				{#each types as type}
					<th class="column">
						<Type {...type} />
					</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each types as { _id, ...attack }}
				<tr class="hover:bg-accent/10">
					<th>
						<Type {...attack} />
					</th>

					{#each types as type}
						<td class="column">
							{#if type?.weakness?.map(t => t._id).includes(_id)}
								⭕️
							{:else if type?.resistance?.map(t => t._id).includes(_id)}
								🔺
							{:else if type?.immunity?.map(t => t._id).includes(_id)}
								❌
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	th, td {
		border: 1px solid;
		text-align: center;
	}

	.column {
		position: relative;
	}
	.column:hover::after {
		content: '';
		pointer-events: none;
		position: absolute;
		inset: calc(-1 * var(--height, 0px)) 0;
		@apply bg-accent/10;
	}

	table :global(neo-type) {
		display: grid;
		place-content: center;
		aspect-ratio: 1;
		width: 1.5em;
		@apply text-2xl;
	}

	tr > th:first-of-type {
		position: sticky;
		left: -2px;
		z-index: 1;
	}

	tr > th:first-of-type::before {
		content: '';
		position: absolute;
		inset: 0 -.5em 0 0;
		background: linear-gradient(to right, #fff 50%, #fff0);
	}

	tr > th:first-of-type > :global(*) {
		position: relative;
	}
</style>

<script>
	import Type from './Type.svelte'

	export let types

	let clientHeight = 0
</script>
