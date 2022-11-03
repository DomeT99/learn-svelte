<script>
  /**
   * Svelte ha un ottimo sistema di reattività.
   * Per dichiarare una proprietà calcolata (corrispettivo delle computed di Vue), 
   * è necessaria la dicitura con il "$" davanti al nome e di seguito
   * l'operazione da eseguire.
   * */
  let count = 0;
  $: doubled = count * 2;
  $: triple = doubled * 3;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<p>{count} doubled is {doubled} and triple is {triple}</p>
