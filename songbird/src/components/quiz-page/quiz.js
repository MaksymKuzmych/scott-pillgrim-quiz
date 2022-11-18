import createPlayer from '../../js/create-player'
import audioPlayerFunc from '../../js/audio-player'
import mixArray from '../../js/mix-array'
import questionMark from '../../assets/png/question-mark.png'
import scottPilgrim from '../../assets/png/comics-scott-pilgrim.png'

let questSong
let answerSong
export let result = 0

export function fillQuestionQuiz(data) {
  let intermediateResult = 6
  let isGuessed = false

  //Fill Quest
  const questName = document.querySelector('.question__name')
  const questAudio = document.querySelector('.question__audio')
  const questImage = document.querySelector('.question__image-wrapper')
  let randomIdx = Math.floor(Math.random() * data.length)
  console.log(randomIdx)
  questAudio.innerHTML = ''
  createPlayer(questAudio, data[randomIdx].audio, '')
  questSong = new Audio(data[randomIdx].audio)
  const audioPlayer = document.querySelector('.audio-player')
  audioPlayerFunc(questSong, audioPlayer)

  //Add Choice Listener
  const choiceBtns = document.querySelectorAll('.choice')
  choiceBtns.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.innerText === data[randomIdx].nameEN) {
        //If Guessed
        result += intermediateResult
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
        questName.innerHTML = data[randomIdx].nameEN

        //Change Answer Style
        el.classList.add('right')

        //Enable Next Button
        const nextLevelBtn = document.querySelector('.next__btn')
        nextLevelBtn.innerHTML = 'Next Level'
        nextLevelBtn.disabled = false
      } else if (!isGuessed) {
        if (!el.classList.contains('wrong')) {
          //Decrease the Result Only if first click
          intermediateResult--
        }
        //Change Answer Style
        el.classList.add('wrong')
      }
    })
  })
}

export function fillAnswerQuiz(data) {
  let mixedData = mixArray(data)

  //fill Answer Area
  const quizChoice = document.querySelector('.options__choice')
  quizChoice.innerHTML = ''
  mixedData.forEach((song) => {
    quizChoice.insertAdjacentHTML('beforeend', `<button class='choice'>${song.nameEN}</button>`)
  })

  //Fill Quiz Catalog when click Answer
  const choiceBtns = document.querySelectorAll('.choice')
  const infoImg = document.querySelector('.options__img-wrapper')
  const infoAudio = document.querySelector('.info__audio')
  const infoDescription = document.querySelector('.info__description')

  choiceBtns.forEach((el) => {
    el.addEventListener('click', () => {
      answerSong?.pause()
      let song = data.find((songData) => songData.nameEN === el.innerText)

      //Fill Quiz Catalog Image
      const image = new Image()
      image.src = song.image
      image.style.width = '200px'
      image.style.height = '200px'
      infoImg.innerHTML = ''
      infoImg.appendChild(image)

      //Fill Quiz Catalog Audio
      infoAudio.innerHTML = ''
      createPlayer(infoAudio, song.audio, song.nameEN)
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
      infoDescription.innerHTML = song.descriptionEN
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
  const infoImg = document.querySelector('.options__img-wrapper')
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

  //Return the Scott Image
  const imageScott = new Image()
  imageScott.src = scottPilgrim
  imageScott.style.height = '250px'
  infoImg.innerHTML = ''
  infoImg.appendChild(imageScott)

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
