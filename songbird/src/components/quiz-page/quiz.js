import createPlayer from '../../js/create-player'
import audioPlayerFunc from '../../js/audio-player'
import mixArray from '../../js/mix-array'
import questionMark from '../../assets/png/question-mark.png'
import defeatEffect from '../../assets/music/effects/defeat.mp3'
import winEffect from '../../assets/music/effects/win.mp3'

let questSong
let answerSong
export let result = 0

const winAudio = new Audio(winEffect)
const defeatAudio = new Audio(defeatEffect)

export function fillQuestionQuiz(data, lang) {
  let intermediateResult = 5
  let isGuessed = false

  //Fill Quest
  const questName = document.querySelector('.question__name')
  const questAudio = document.querySelector('.question__audio')
  const questImage = document.querySelector('.question__image-wrapper')
  const nextLevelBtn = document.querySelector('.next__btn')
  let randomIdx = Math.floor(Math.random() * data.length)
  if (lang === 'EN') {
    nextLevelBtn.innerText = 'Next Level'
  } else {
    nextLevelBtn.innerText = 'Следующий уровень'
  }

  //create Audio Player
  questAudio.innerHTML = ''
  createPlayer(questAudio, data[randomIdx].audio, '')
  questSong = new Audio(data[randomIdx].audio)
  const audioPlayer = document.querySelector('.audio-player')
  audioPlayerFunc(questSong, audioPlayer)

  //Add Choice Listener
  const choiceBtns = document.querySelectorAll('.choice')
  const winImg = document.querySelector('.win-img')
  const blackout = document.querySelector('.blackout')
  choiceBtns.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.innerText === data[randomIdx][`name${lang}`]) {
        //If Guessed
        if (!el.classList.contains('right')) {
          result += intermediateResult
          winAudio.play()
          winImg.classList.add('win-img_show')
          blackout.classList.add('blackout_show')
        }
        isGuessed = true

        //Change Score
        const quizScore = document.querySelector('.quiz__score')
        quizScore.innerHTML = `Score: ${result}`

        //Pause Quest Song
        questSong.pause()
        const playBtn = audioPlayer.querySelector('.controls .toggle-play')
        playBtn.classList.remove('pause')
        playBtn.classList.add('play')

        //Fill Quest Image
        questImage.innerHTML = ''
        const image = new Image()
        image.src = data[randomIdx].image
        image.style.width = '100px'
        image.style.height = '100px'
        questImage.appendChild(image)

        //Fill Quest Name
        questName.innerHTML = data[randomIdx][`name${lang}`]

        //Change Answer Style
        el.classList.add('right')

        //Enable Next Button
        nextLevelBtn.disabled = false
      } else if (!isGuessed) {
        //Decrease the Result Only if first click
        if (!el.classList.contains('wrong')) {
          intermediateResult--
        }

        //Change Answer Style
        defeatAudio.play()
        el.classList.add('wrong')
      }
    })
  })
}

export function fillAnswerQuiz(songData, enemyData, lang) {
  let mixedData = mixArray(songData)

  //fill Answers Area
  const quizChoice = document.querySelector('.options__choice')
  quizChoice.innerHTML = ''
  mixedData.forEach((song) => {
    quizChoice.insertAdjacentHTML('beforeend', `<button class='choice'>${song[`name${lang}`]}</button>`)
  })

  //Fill Catalog by Enemy
  const infoImg = document.querySelector('.options__img-wrapper')
  const infoAudio = document.querySelector('.info__audio')
  const infoDescription = document.querySelector('.info__description')

  const image = new Image()
  image.src = enemyData.photo
  image.style.width = '200px'
  image.style.height = '200px'
  infoImg.innerHTML = ''
  infoImg.appendChild(image)

  let prompt = ''
  if (lang === 'EN') {
    prompt = 'Guess the song to defeat the opponent\n'
  } else {
    prompt = 'Угадайте песню, чтобы победить противника\n'
  }

  infoAudio.innerText = prompt
  infoDescription.innerHTML = enemyData[`description${lang}`]

  //Fill Quiz Catalog when click Answer
  const choiceBtns = document.querySelectorAll('.choice')

  choiceBtns.forEach((el) => {
    el.addEventListener('click', () => {
      answerSong?.pause()
      let song = songData.find((song) => song[`name${lang}`] === el.innerText)

      //Fill Quiz Catalog Image
      const image = new Image()
      image.src = song.image
      image.style.width = '200px'
      image.style.height = '200px'
      infoImg.innerHTML = ''
      infoImg.appendChild(image)

      //Fill Quiz Catalog Audio
      infoAudio.innerHTML = ''
      createPlayer(infoAudio, song.audio, song[`name${lang}`])
      answerSong = new Audio(song.audio)
      const audioPlayer = document.querySelector('.info__audio > .audio-player')
      audioPlayerFunc(answerSong, audioPlayer)

      //Pause and Rewind Quiz Catalog Song when click Quest Song
      document.querySelector('.question__audio .toggle-play').addEventListener('click', () => {
        answerSong.pause()
        answerSong.currentTime = 0
      })

      //Pause Quest Song when click Quiz Catalog Song
      document.querySelector('.info__audio .toggle-play').addEventListener('click', () => {
        questSong.pause()
      })

      //Pause Quiz Catalog Song when click another Answer
      const choiceBtns = document.querySelectorAll('.choice')
      choiceBtns.forEach((el) => {
        el.addEventListener('click', () => {
          answerSong.pause()
        })
      })

      //Fill Quiz Catalog Description
      if (lang === 'EN') {
        infoDescription.style.fontFamily = 'Metal Mania'
      } else {
        infoDescription.style.fontFamily = 'Pangolin'
      }
      infoDescription.innerHTML = song[`description${lang}`]
    })
  })
}

export function pauseAudio() {
  answerSong?.pause()
  questSong?.pause()
}

export function clearQuiz() {
  const questName = document.querySelector('.question__name')
  const questAudio = document.querySelector('.question__audio')
  const questImage = document.querySelector('.question__image-wrapper')
  const infoAudio = document.querySelector('.info__audio')
  const infoDescription = document.querySelector('.info__description')

  questName.innerHTML = '**********'
  questAudio.innerHTML = ''

  //Return the Question Mark Image
  const imageQuest = new Image()
  imageQuest.src = questionMark
  imageQuest.style.width = '100px'
  imageQuest.style.height = '100px'
  questImage.innerHTML = ''
  questImage.appendChild(imageQuest)

  //Clear Audio and Description
  infoAudio.innerHTML = ''
  infoDescription.innerHTML = ''
}

export function clearResult() {
  result = 0

  //Clear Score
  const quizScore = document.querySelector('.quiz__score')
  quizScore.innerHTML = `Score: 0`
}
