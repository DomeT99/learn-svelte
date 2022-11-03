<script>
  /**Nella grande maggioranza delle volte, ci si trova ad avere componenti con tante props.
   * Passarle una per una durante la dichiarazione può risultare tedioso.
   * Svelte ovvia a questo problema usando una delle feature di ES6: lo spread operator.
   * 
   * Per passare tutte le props a queste componente è sufficente dichiarare un oggetto
   * con tutte le props necessarie ed usare questa sintassi "{...obj}"
   */
  export let name;
  export let version;
  export let speed;
  export let website;
</script>

<p>
  The <code>{name}</code> package is {speed} fast. Download version {version} from
  <a href="https://www.npmjs.com/package/{name}">npm</a>
  and <a href={website}>learn more here</a>
</p>
