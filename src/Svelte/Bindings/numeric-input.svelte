<script>
  /**
   * Il bind di Svelte è bidirezionale, come in questo esempio:
   * la variabile "a" al variare del range, cambia valore in tutti i punti del componente.
   */
  let a = 1;
  let b = 2;
</script>

<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>
