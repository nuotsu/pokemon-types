<label>
	{label}
	<select bind:value disabled={label !== 'Type 1:' && other === ''}>
		<option value="" selected>None</option>
		{#each types as type}
			<option
				value={type._id}
				disabled={other === type._id}
			>
				{type.emoji} {type.name.en}
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
