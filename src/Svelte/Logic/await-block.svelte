<script>
  /**L'await block rende possibile la renderizzazione
   * dei dati ricevuti come risposta dalla chiamata asincrona
   * direttamente nell'HTML.
   * Si può gestire anche l'errore come fosse una normale chiamata fetch.
   * 
   * É possibile omettere il blocco catch e gestire la chiamata
   * in un'unica riga {#await promise then value}.
   */
  async function getRandomNumber() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = getRandomNumber();

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click={handleClick}> generate random number </button>

{#await promise}
  <p>...waiting</p>
{:then object}
  <p>The object is <strong>{object}</strong></p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
