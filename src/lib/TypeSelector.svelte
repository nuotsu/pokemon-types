<label>
	<small>{label}</small>

	<select
		id={label}
		bind:value disabled={label !== 'Type 1' && other === ''}
		style:--color={color ? `${color}80` : null}
		style:--color-mid={color ? `${color}20` : null}
		style:--color-light={color ? `${color}00` : null}
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
		background-image: linear-gradient(to bottom right, var(--color), var(--color-light));
		transition: box-shadow .6s ease-in-out;
		@apply rounded-md shadow-xl shadow-[var(--color-mid)];
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
