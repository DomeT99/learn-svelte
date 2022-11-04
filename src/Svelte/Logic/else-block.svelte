<script>
  /**
   * L'esempio precedente è possibile tradurlo anche usando il classico
   * costrutto porgrammativo "if else" come appunto in questo caso.
   */
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

{#if user.loggedIn}
  <button on:click={toggle}> Log out </button>
{:else}
  <button on:click={toggle}> Log in </button>
{/if}
