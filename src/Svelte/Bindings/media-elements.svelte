<script>
  // @ts-nocheck
  /**Esempio di utilizzo del bind sui media*/
  let time = 0;
  let duration;
  let paused = true;

  let showControls = true;
  let showControlsTimeout;

  let lastMouseDown;

  function handleMove(e) {
    clearTimeout(showControlsTimeout);
    showControlsTimeout = setTimeout(() => (showControls = false), 2500);
    showControls = true;

    if (!duration) return;
    if (e.type !== "touchmove" && !(e.buttons & 1)) return;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const { left, right } = this.getBoundingClientRect();
    time = (duration * (clientX - left)) / (right - left);
  }

  function handleMousedown(e) {
    lastMouseDown = new Date();
  }

  function handleMouseup(e) {
    if (new Date() - lastMouseDown < 300) {
      if (paused) e.target.play();
      else e.target.pause();
    }
  }

  function format(seconds) {
    if (isNaN(seconds)) return "...";

    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
  }
</script>

<h1>Caminandes: Llamigos</h1>
<p>From <a href="https://studio.blender.org/films">Blender Studio</a>. CC-BY</p>

<div>
  <video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    on:mousemove={handleMove}
    on:touchmove|preventDefault={handleMove}
    on:mousedown={handleMousedown}
    on:mouseup={handleMouseup}
    bind:currentTime={time}
    bind:duration
    bind:paused
  >
    <track kind="captions" />
  </video>

  <div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
    <progress value={time / duration || 0} />

    <div class="info">
      <span class="time">{format(time)}</span>
      <span>click anywhere to {paused ? "play" : "pause"} / drag to seek</span>
      <span class="time">{format(duration)}</span>
    </div>
  </div>
</div>
