import './index.html'
import './index.scss'
import catalogPage from './components/catalog-page/catalog.html'
import quizPage from './components/quiz-page/quiz.html'
import resultsPage from './components/results-page/results.html'
import startPage from './components/start-page/start.html'
import songsData from './assets/songs-data/songs.js'
import fillData from './components/catalog-page/catalog.js'
import { result, clearResult, clearQuiz, pauseAudio, fillAnswerQuiz, fillQuestionQuiz } from './components/quiz-page/quiz.js'

const main = document.querySelector('.main')

let roundNumber = 0

//build DOM
main.insertAdjacentHTML('beforeend', startPage)
main.insertAdjacentHTML('beforeend', quizPage)
main.insertAdjacentHTML('beforeend', resultsPage)
main.insertAdjacentHTML('beforeend', catalogPage)

document.querySelector('.start-wrapper').classList.remove('hide')

//Change Pages
const backArrows = document.querySelectorAll('.back-arrow')

backArrows.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.catalog-wrapper').classList.add('hide')
    document.querySelector('.quiz-wrapper').classList.add('hide')
    // document.querySelector('.results-wrapper').classList.add('hide')
    document.querySelector('.start-wrapper').classList.remove('hide')
  })
})

//Open Catalog
const catalogBtn = document.querySelector('.btn__catalog')

catalogBtn.addEventListener('click', () => {
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.catalog-wrapper').classList.remove('hide')
  fillData(songsData)
})

//Open Start
const startBtn = document.querySelector('.btn__start')
const genres = document.querySelectorAll('.genre')

startBtn.addEventListener('click', () => {
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.quiz-wrapper').classList.remove('hide')
  fillAnswerQuiz(songsData[roundNumber])
  fillQuestionQuiz(songsData[roundNumber], result)
  genres[roundNumber].classList.add('active')
})

//Switch Level
const nextLevelBtn = document.querySelector('.next__btn')

nextLevelBtn.addEventListener('click', () => {
  if (roundNumber < 5) {
    pauseAudio()
    clearQuiz()
    genres[roundNumber].classList.remove('active')
    roundNumber++
    genres[roundNumber].classList.add('active')
    fillAnswerQuiz(songsData[roundNumber])
    fillQuestionQuiz(songsData[roundNumber])
    nextLevelBtn.disabled = true
  } else {
    nextLevelBtn.innerHTML = 'Results'
  }
})

//Clear Quiz Page when Back
const quizBackArrow = document.querySelector('.quiz-back')

quizBackArrow.addEventListener('click', () => {
  genres[roundNumber].classList.remove('active')
  pauseAudio()
  clearQuiz()
  clearResult()
  roundNumber = 0
})
