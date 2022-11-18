import questionMark from '../../assets/png/question-mark.png'
import audioPlayerFunc from '../../js/audio-player.js'
import createPlayer from '../../js/create-player'

const songs = {}

export default function fillData(data) {
  //Fill Songs
  const music = document.querySelector('.catalog__music')
  data.forEach((arr) => {
    arr.forEach((el) => {
      createPlayer(music, el.audio, el.nameEN)
      const audioPlayerAll = document.querySelectorAll('.audio-player')
      const audioPlayer = audioPlayerAll[audioPlayerAll.length - 1]
      const audio = new Audio(el.audio)
      songs[el.nameEN] = audio
      audioPlayerFunc(audio, audioPlayer, songs)
    })
  })

  //Switch Songs
  Object.entries(songs).forEach(([key, song], idx) => {
    song.addEventListener('ended', () => {
      song.pause()
      song.currentTime = 0
      const playBtns = document.querySelectorAll('.controls .toggle-play')
      const currentSongBtn = playBtns[idx]
      const nextSongBtn = playBtns[idx + 1]
      currentSongBtn.classList.remove('pause')
      currentSongBtn.classList.add('play')
      if (nextSongBtn) {
        nextSongBtn.classList.remove('play')
        nextSongBtn.classList.add('pause')
        Object.values(songs)[idx + 1].play()
      }
    })

    song.addEventListener('play', () => {
      const imgWrapper = document.querySelector('.catalog__img-wrapper')
      const songText = document.querySelector('.catalog__text')
      let currentSong = data.flat(Infinity).find((el) => el.nameEN === key)

      //Add new Image
      const image = new Image()
      image.src = currentSong.image
      image.style.height = '300px'
      imgWrapper.innerHTML = ''
      imgWrapper.appendChild(image)

      //Add new Description
      songText.innerHTML = currentSong.descriptionEN
    })
  })
  clearCatalogListener()
}

function clearCatalogListener() {
  const backArrow = document.querySelector('.catalog-back')

  //Pause Songs
  backArrow.addEventListener('click', () => {
    Object.values(songs).forEach((song) => {
      song.pause()
      song.currentTime = 0
    })

    const playBtns = document.querySelectorAll('.controls .toggle-play')
    playBtns.forEach((btn) => {
      btn.classList.remove('pause')
      btn.classList.add('play')
    })

    //Clear Image
    const imgWrapper = document.querySelector('.catalog__img-wrapper')
    const image = new Image()
    image.src = questionMark
    image.style.width = '300px'
    image.style.height = '300px'
    imgWrapper.innerHTML = ''
    imgWrapper.appendChild(image)

    //Clear Description
    const songText = document.querySelector('.catalog__text')
    songText.innerHTML =
      'Этот каталог позволит вам ознакомиться с репертуаром ваших противников. Подготовьтесь тщательно, чтобы победить всех злых бывших Рамоны'
  })
}
