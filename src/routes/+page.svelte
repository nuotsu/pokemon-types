<h1>Types</h1>

<div class="overflow-x-auto">
	<table>
		<thead>
			<tr>
				<th>👉</th>
				{#each types as defense}
					<th>
						<span>{defense.emoji}</span>
					</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each types as attack}
				<tr class="hover:bg-ink/10">
					<th>
						<span>{attack.emoji}</span>
					</th>

					{#each types as { effectiveness }}
						<td>
							{#if effectiveness.weakTo?.map(t => t._id).includes(attack._id)}
								<span>⭕️</span>
							{:else if effectiveness.resistantTo?.map(t => t._id).includes(attack._id)}
								<span>🔺</span>
							{:else if effectiveness.immuneTo?.map(t => t._id).includes(attack._id)}
								<span>❌</span>
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
	}

	span {
		display: grid;
		place-content: center;
		aspect-ratio: 1;
		width: 2em;
	}
</style>

<script>
	export let data = {}

	const { types } = data
</script>
