<button on:click={dialog.showModal()}>
	<slot name="trigger">
		{trigger}
	</slot>
</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog class={className} bind:this={dialog} on:click={dialog.close()}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<form method="dialog" on:click|stopPropagation>
		<slot></slot>
	</form>
</dialog>

<style>
	button {
		text-decoration: 1px dashed underline;
		@apply hover:decoration-solid;
	}

	dialog {
		animation: appear .2s ease-in-out forwards;
	}

	@keyframes appear {
		from {
			opacity: 0;
			scale: 0.8;
		}
	}

	dialog::backdrop {
		backdrop-filter: blur(4px);
	}
</style>

<script>
	export let trigger = 'Open', className

	let dialog
</script>
