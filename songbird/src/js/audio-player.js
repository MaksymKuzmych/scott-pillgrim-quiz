export default function audioPlayerFunc(audio, audioPlayer, songs) {
  audio.addEventListener(
    'loadeddata',
    () => {
      audioPlayer.querySelector('.time .length').textContent = getTimeCodeFromNum(audio.duration)
      audio.volume = 0.75
    },
    false
  )

  //click on timeline to skip around
  const timeline = audioPlayer.querySelector('.timeline')
  timeline.addEventListener(
    'click',
    (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration
      audio.currentTime = timeToSeek
    },
    false
  )

  //click volume slider to change volume
  const volumeSlider = audioPlayer.querySelector('.controls .volume-slider')
  volumeSlider.addEventListener(
    'click',
    (e) => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width
      const newVolume = e.offsetX / parseInt(sliderWidth)
      audio.volume = newVolume
      audioPlayer.querySelector('.controls .volume-percentage').style.width = newVolume * 100 + '%'
    },
    false
  )

  //check audio percentage and update time accordingly
  setInterval(() => {
    const progressBar = audioPlayer.querySelector('.progress')
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%'
    audioPlayer.querySelector('.time .current').textContent = getTimeCodeFromNum(audio.currentTime)
  }, 500)

  //toggle between playing and pausing on button click
  const playBtn = audioPlayer.querySelector('.controls .toggle-play')
  playBtn.addEventListener(
    'click',
    () => {
      document.querySelectorAll('.controls .toggle-play').forEach((el) => {
        el.classList.remove('pause')
        el.classList.add('play')
      })
      if (audio.paused && songs) {
        Object.values(songs).forEach((el) => {
          el.pause()
          el.currentTime = 0
        })
        playBtn.classList.remove('play')
        playBtn.classList.add('pause')
        audio.play()
      } else if (audio.paused) {
        playBtn.classList.remove('play')
        playBtn.classList.add('pause')
        audio.play()
      } else {
        playBtn.classList.remove('pause')
        playBtn.classList.add('play')
        audio.pause()
      }
    },
    false
  )

  audioPlayer.querySelector('.volume-button').addEventListener('click', () => {
    const volumeEl = audioPlayer.querySelector('.volume-container .volume')
    audio.muted = !audio.muted
    if (audio.muted) {
      volumeEl.classList.remove('volume-on')
      volumeEl.classList.add('volume-off')
    } else {
      volumeEl.classList.add('volume-on')
      volumeEl.classList.remove('volume-off')
    }
  })

  //time
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num)
    let minutes = parseInt(seconds / 60)
    seconds -= minutes * 60
    const hours = parseInt(minutes / 60)
    minutes -= hours * 60

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`
  }
}
