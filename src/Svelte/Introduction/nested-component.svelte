<script>
    /**Per avvalorare ciò che è stato detto in precedenza,
     * in questo file .svelte, viene importato il componente "Styling",
     * che al suo interno ha lo stesso contenuto di questo componente,
     * ma stilizzato.
     * A schermo verrà visualizzato "Styling" (con stile annesso), e il paragrafo
     * sottostante senza stile. 
     */
  import Styling from "./styling.svelte";
</script>

<p>This is a paragraph.</p>
<Styling />
