<h1>Neo Types</h1>

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

					{#each types as { compatibility }}
						<td>
							{#if compatibility?.weakness?.map(t => t._id).includes(attack._id)}
								<span>⭕️</span>
							{:else if compatibility?.resistance?.map(t => t._id).includes(attack._id)}
								<span>🔺</span>
							{:else if compatibility?.immunity?.map(t => t._id).includes(attack._id)}
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

	console.log(types)
</script>
