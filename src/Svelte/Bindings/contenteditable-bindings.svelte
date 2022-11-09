<script>
  /**contenteditable ti permette di utilizzare
   * il bind con "innerHTML"
   */
  let html = "<p>Write some text!</p>";
</script>

<div contenteditable="true" bind:innerHTML={html} />
