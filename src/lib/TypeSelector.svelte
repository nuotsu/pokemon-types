<label>
	<small>{label}</small>

	<select
		id={label}
		bind:value disabled={label !== 'Type 1' && other === ''}
		style:background-color={color ? `${color}80` : null}
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
		font-size: x-small;
	}

	select {
		display: block;
		width: 100%;
		padding: 0.5em;
		border-radius: 0;
		text-align: center;
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
