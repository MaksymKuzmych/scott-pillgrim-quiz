export default function fillData(data) {
  const music = document.querySelector('.catalog__music')
  const songs = {}

  data.forEach((arr) => {
    arr.forEach((el) => {
      music.insertAdjacentHTML(
        'beforeend',
        `<audio>
      <source src="${el.audio}"  type="audio/mp3">
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
        <div class="name">${el.nameEN}</div>
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

      const audioPlayerAll = document.querySelectorAll('.audio-player')
      const audioPlayer = audioPlayerAll[audioPlayerAll.length - 1]
      const audio = new Audio(el.audio)
      songs[el.nameEN] = audio

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
          if (audio.paused) {
            Object.values(songs).forEach((el) => {
              el.pause()
              el.currentTime = 0
            })
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
    })
  })

  Object.entries(songs).forEach(([key, el], idx) => {
    el.addEventListener('ended', () => {
      Object.values(songs).forEach((el) => {
        el.pause()
      })
      const playBtns = document.querySelectorAll('.controls .toggle-play')
      el.currentTime = 0
      playBtns[idx].classList.remove('pause')
      playBtns[idx].classList.add('play')
      if (playBtns[idx + 1]) {
        playBtns[idx + 1].classList.remove('play')
        playBtns[idx + 1].classList.add('pause')
        Object.values(songs)[idx + 1].play()
      }
    })

    el.addEventListener('play', () => {
      const imgWrapper = document.querySelector('.catalog__img-wrapper')
      const songText = document.querySelector('.catalog__text')
      imgWrapper.innerHTML = ''
      let current = data.flat(Infinity).find((el) => el.nameEN === key)
      const image = new Image()
      image.src = current.image
      image.style.width = '300px'
      image.style.height = '300px'
      imgWrapper.appendChild(image)
      songText.innerHTML = current.descriptionEN
    })
  })
}
