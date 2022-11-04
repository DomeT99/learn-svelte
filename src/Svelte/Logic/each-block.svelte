<script>
  /**
   * Il blocco each è quel tipo di costrutto che permette di renderizzare
   * gli elementi di un array sfruttando la potenza del ciclo for.
   */
  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
  {#each cats as { id, name }, i}
    <li>
      <a href="https://www.youtube.com/watch?v={id}">
        {i + 1}: {name}
      </a>
    </li>
  {/each}
</ul>
