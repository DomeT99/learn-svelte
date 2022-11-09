<script>
    /**
     * Il bind è possbile utilizzarlo su una prop di un componente:
     * in questo caso Keypad è un componente fittizio che ha come prop
     * "value".
     * */
	import Keypad from './Keypad.svelte';

	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<Keypad bind:value={pin} on:submit={handleSubmit}/>