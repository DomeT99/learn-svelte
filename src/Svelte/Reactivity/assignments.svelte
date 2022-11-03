<script>
    /**In questo componente è presente un po' di logica leggermente più avanzata,
     * ed entra in gioco una nuova feature: "on:click".
     * Cattura l'evento (in questo caso incrementCount()) e viene eseguita la funzione.
     * 
     * Successivamente viene visualizzata a schermo il cambiamento della variabile "count".
     */
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>