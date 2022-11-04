<script>
  /**
   * Svelte mette a disposizione
   * i modificatori di eventi (once,preventDefault, ecc...)
   * per ottenere un certo tipo di comportamento dall'evento.
   * 
   * La sintassi è: on:[nomeevento]|[modificatore].
   */
  function handleClick() {
    alert("no more alerts");
  }
</script>

<button on:click|once={handleClick}> Click me </button>

