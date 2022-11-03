/**main.ts è il cuore di tutta l'applicazione:
 * ua vengono gestite diverse impostazioni dell'app.
 */
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
