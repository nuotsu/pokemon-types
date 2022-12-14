<label>
	{label}
	<select bind:value disabled={label !== 'Type 1:' && other === ''}>
		<option value="" selected>None</option>
		{#each types as { _id, name, emoji }}
			<option value={_id} disabled={other === _id}>
				{emoji} {name.en}
			</option>
		{/each}
	</select>
</label>

<script>
	export let label, types, value, other

	$: {
		if (label !== 'Type 1:' && other === '') {
			value = ''
		}
	}
</script>
