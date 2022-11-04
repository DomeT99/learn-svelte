<script>
  /**Come scritto nei primi capitoli,
   * la direttiva "on:" cattura l'evento
   * che gli viene passato.
   * 
   * A seguire della direttiva, va inserito
   * il tipo di evento (click, load, ecc...)
   */
  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<div on:mousemove={handleMousemove}>
  The mouse position is {m.x} x {m.y}
</div>
