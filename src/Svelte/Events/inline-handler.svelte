<script>
  /**Oltre che passare una funzione,
   * è possibile scrivere la logica
   * dell'evento direttamente inline.
   */
  let m = { x: 0, y: 0 };
</script>

<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  The mouse position is {m.x} x {m.y}
</div>
