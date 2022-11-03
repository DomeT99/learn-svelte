<script lang="ts">
  /**Questa è la modalità di dichiarazione di una prop.
   * Verrà successivamente passata al componente dove dichiarato.
   * Per far sì che la prop venga "captata" è necessario esportarla come
   * un normale modulo Javascript.
   */
  export let answer: string;
</script>

<p>The answer is {answer}</p>
