<script>
	let count = 0;

	$: if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button class="mt-4 bg-black text-white p-2 rounded-md w-[100%]" on:click={handleClick}>
	Clicado {count} {count === 1 ? 'vez' : 'vezes'}
</button>