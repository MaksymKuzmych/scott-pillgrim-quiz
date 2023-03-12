export default function createPlayer(target, audio, name) {
  target.insertAdjacentHTML(
    'beforeend',
    `<audio>
  <source src="${audio}"  type="audio/mp3">
</audio> 
<div class="audio-player">
  <div class="timeline">
    <div class="progress"></div>
  </div>
  <div class="controls">
    <div class="play-container">
      <div class="toggle-play play">
    </div>
    </div>
    <div class="time">
      <div class="current">0:00</div>
      <div class="divider">/</div>
      <div class="length"></div>
    </div>
    <div class="name">${name}</div>
    <div class="volume-container">
      <div class="volume-button">
        <div class="volume volume-on"></div>
      </div>
      
      <div class="volume-slider">
        <div class="volume-percentage"></div>
      </div>
    </div>
  </div>
</div>`
  )
}
