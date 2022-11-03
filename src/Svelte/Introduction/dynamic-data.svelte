<script>
  /**Su Svelte è possibile assegnare dinamicamente all'HTML
   * dei campi dinamici: nell'esempio viene assegnato il "src" 
   * e l'"alt" del tag img che non è altro che una variabile Javascript.
   */
  let src = "https://svelte.dev/tutorial/image.gif";
  let name = "Rick Astley";
</script>

<img {src} alt="{name} dances." />
