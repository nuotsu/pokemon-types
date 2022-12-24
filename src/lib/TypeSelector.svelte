<label>
	<small>{label}</small>

	<select
		id={label}
		bind:value disabled={label !== 'Type 1' && other === ''}
		style:background-image={color ? `linear-gradient(to bottom right, ${color}80, ${color}00)` : null}
	>
		<option value="" selected>None</option>
		{#each types as { _id, name, emoji }}
			<option value={_id} disabled={other === _id}>
				{emoji} {name.en}
			</option>
		{/each}
	</select>
</label>

<style>
	small {
		display: block;
	}

	select {
		appearance: none;
		cursor: pointer;
		display: block;
		width: 100%;
		padding: 0.5em;
		text-align: center;
		@apply rounded-md shadow-xl;
	}
</style>

<script>
	export let label, types, value, other

	$: {
		if (label !== 'Type 1' && other === '') {
			value = ''
		}
	}

	$: color = types.find(({ _id }) => _id === value)?.color
</script>
