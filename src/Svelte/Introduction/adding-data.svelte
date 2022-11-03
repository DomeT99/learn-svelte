<script>
    /**
     * Questo componente Svelte ha della logica al suo interno: 
     * se richiamato, visualizzerà a schermo "Hello WORLD!", 
     * perchè la variabile "name" viene manipolata dal Javascript
     * con la funzione "toUpperCase()".
     * */
	let name = 'world';
</script>

<h1>Hello {name.toUpperCase()}!</h1>