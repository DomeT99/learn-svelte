<script>
  /**
   * bind utilizzato per la modifica delle dimensioni:
   * in questo modo è possibile avere il controllo dello
   * style inline.
   */
  let w;
  let h;
  let size = 42;
  let text = "edit me";
</script>

<input type="range" bind:value={size} />
<input bind:value={text} />

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
  <span style="font-size: {size}px">{text}</span>
</div>
