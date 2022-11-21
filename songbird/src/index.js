import './index.html'
import './index.scss'
import './js/self-assessment.js'
import catalogPage from './components/catalog-page/catalog.html'
import descriptionPage from './components/description-page/description.html'
import quizPage from './components/quiz-page/quiz.html'
import resultsPage from './components/results-page/results.html'
import startPage from './components/start-page/start.html'
import warningPage from './components/warning-page/warning.html'
import songsData from './assets/songs-data/songs.js'
import enemiesData from './assets/enemies-data/enemies'
import fillData from './components/catalog-page/catalog.js'
import { result, clearResult, clearQuiz, pauseAudio, fillAnswerQuiz, fillQuestionQuiz } from './components/quiz-page/quiz.js'
import showResults from './components/results-page/results'
import changeLang from './js/change-lang'

const main = document.querySelector('.main')
const langButtonEN = document.querySelector('.lang_en')
const langButtonRU = document.querySelector('.lang_ru')

let roundNumber = 0
let lang = localStorage.getItem('lang') || 'EN'

//Build DOM
main.insertAdjacentHTML('beforeend', startPage)
main.insertAdjacentHTML('beforeend', quizPage)
main.insertAdjacentHTML('beforeend', resultsPage)
main.insertAdjacentHTML('beforeend', catalogPage)
main.insertAdjacentHTML('beforeend', descriptionPage)
main.insertAdjacentHTML('beforeend', warningPage)

changeLang(lang, result)
fillData(songsData, lang)

document.querySelector('.start-wrapper').classList.remove('hide')

//Change Pages
const backArrows = document.querySelectorAll('.back-arrow')

backArrows.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.catalog-wrapper').classList.add('hide')
    document.querySelector('.description-wrapper').classList.add('hide')
    document.querySelector('.quiz-wrapper').classList.add('hide')
    document.querySelector('.results-wrapper').classList.add('hide')
    document.querySelector('.warning-wrapper').classList.add('hide')
    document.querySelector('.start-wrapper').classList.remove('hide')
    langButtonEN.disabled = false
    langButtonRU.disabled = false
  })
})

//Open Catalog
const catalogBtn = document.querySelector('.btn__catalog')

catalogBtn.addEventListener('click', () => {
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.catalog-wrapper').classList.remove('hide')
})

//Open Warning and Start
const startBtn = document.querySelector('.btn__start')
const genres = document.querySelectorAll('.genre')
const warningBtn = document.querySelector('.warning__btn')
const nextLevelBtn = document.querySelector('.next__btn')

startBtn.addEventListener('click', () => {
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.warning-wrapper').classList.remove('hide')
})

warningBtn.addEventListener('click', () => {
  nextLevelBtn.disabled = true
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.warning-wrapper').classList.add('hide')
  document.querySelector('.quiz-wrapper').classList.remove('hide')
  fillAnswerQuiz(songsData[roundNumber], enemiesData[roundNumber], lang)
  fillQuestionQuiz(songsData[roundNumber], lang)
  genres[roundNumber].classList.add('active')
  langButtonEN.disabled = true
  langButtonRU.disabled = true
})

//Switch Level
nextLevelBtn.addEventListener('click', () => {
  if (roundNumber < 5) {
    pauseAudio()
    clearQuiz()
    genres[roundNumber].classList.remove('active')
    roundNumber++
    genres[roundNumber].classList.add('active')
    fillAnswerQuiz(songsData[roundNumber], enemiesData[roundNumber], lang)
    fillQuestionQuiz(songsData[roundNumber], lang)
    nextLevelBtn.disabled = true
  }

  if (nextLevelBtn.innerText === 'Results' || nextLevelBtn.innerHTML === 'Результаты') {
    document.querySelector('.quiz-wrapper').classList.add('hide')
    document.querySelector('.results-wrapper').classList.remove('hide')
    showResults(lang)
    clearQuizPage()
  }

  if (roundNumber === 5) {
    if (lang === 'EN') {
      nextLevelBtn.innerHTML = 'Results'
    } else {
      nextLevelBtn.innerHTML = 'Результаты'
    }
  }
})

//Clear Quiz Page when Back
const quizBackArrow = document.querySelector('.quiz-back')

function clearQuizPage() {
  genres[roundNumber].classList.remove('active')
  pauseAudio()
  clearQuiz()
  clearResult()
  roundNumber = 0
}

quizBackArrow.addEventListener('click', clearQuizPage)

//Open Description
const descriptionBtn = document.querySelector('.btn__description')

descriptionBtn.addEventListener('click', () => {
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.description-wrapper').classList.remove('hide')
})

//Change Language
if (lang === 'EN') {
  langButtonEN.classList.add('active')
} else {
  langButtonRU.classList.add('active')
}

langButtonEN.addEventListener('click', () => {
  lang = 'EN'
  localStorage.setItem('lang', 'EN')
  changeLang(lang, result)
  langButtonRU.classList.remove('active')
  langButtonEN.classList.add('active')
  //Change Lang in Catalog
  fillData(songsData, lang)
})

langButtonRU.addEventListener('click', () => {
  lang = 'RU'
  localStorage.setItem('lang', 'RU')
  changeLang(lang, result)
  langButtonEN.classList.remove('active')
  langButtonRU.classList.add('active')
  //Change Lang in Catalog
  fillData(songsData, lang)
})

//Hide Blackout
const winImg = document.querySelector('.win-img')
const blackout = document.querySelector('.blackout')

function hideWin() {
  winImg.classList.remove('win-img_show')
  blackout.classList.remove('blackout_show')
}

blackout.addEventListener('click', hideWin)
winImg.addEventListener('click', hideWin)

setTimeout(() => {
  alert(
    'Приветствую. Если у вас не быстрый интернет, перед началом игры подождите пару минут пока подгрузятся данные (так как если ваш интернет не успеет подгрузить файлы, возможен undefined в некоторых местах). Также если по вашему мнению в работе есть недочёты, не скрывайте, пожалуйста, ник при проверке. Заранее спасибо!'
  )
}, 500)
