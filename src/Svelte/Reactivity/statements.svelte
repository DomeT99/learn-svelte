<script>
    /**Tramite la dicitura "$" è possibile tenere sotto controllo
     * lo stato delle variabili reattive (corrispettivo dei watchers di Vue).
     */
	let count = 0;

	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>