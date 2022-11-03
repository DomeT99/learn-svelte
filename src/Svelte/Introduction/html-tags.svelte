<script>
  /**Con questa particolare sintassi, Svelte è in grado di interpretare
   * i tag HTML che gli vengono forniti come nell'esempio.
   * Cito una nota della documentazione di Vue:
   *
   * "Dynamically rendering arbitrary HTML on your website can be very dangerous
   *  because it can easily lead to XSS vulnerabilities."
   * 
   * Questo per dire che questa feature va usata con cautela!
   */
  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
