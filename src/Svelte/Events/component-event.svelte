<script>
  /**
   * createEventDispatcher() è una funzione importata direttamente dalla libreria di Svelte:
   * va assegnata ad una costante che successivamente verrà usata come funzione per comunicare 
   * il nome dell'evento all'esterno del componente ed eventuali dati da passare.
   */
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<button on:click={sayHello}>Click to say hello</button>
