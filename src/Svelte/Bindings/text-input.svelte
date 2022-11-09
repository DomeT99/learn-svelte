<script>
  /**
   * Con la keyword "bind" prima dell'attributo
   * è possibile comunicare al componente genitore
   * il valore della variabile collegata.
   */
  let name = "world";
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>
