<script>
  /**
   * Con questo tipo di logica viene gestito il rendering condizionale:
   * significa, come in questo caso, che al cambiare dello stato di una variabile
   * viene renderizzato un certo template/componente piuttosto che un altro
   */
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

{#if user.loggedIn}
  <button on:click={toggle}> Log out </button>
{/if}

{#if !user.loggedIn}
  <button on:click={toggle}> Log in </button>
{/if}
