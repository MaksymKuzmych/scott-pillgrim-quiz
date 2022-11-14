import './index.html'
import './index.scss'
import catalogPage from './components/catalog-page/catalog.html'
import quizPage from './components/quiz-page/quiz.html'
import resultsPage from './components/results-page/results.html'
import startPage from './components/start-page/start.html'
import songsData from './assets/songs-data/songs.js'
import fillData from './components/catalog-page/catalog.js'

const main = document.querySelector('.main')

main.insertAdjacentHTML('beforeend', startPage)
main.insertAdjacentHTML('beforeend', quizPage)
main.insertAdjacentHTML('beforeend', resultsPage)
main.insertAdjacentHTML('beforeend', catalogPage)

document.querySelector('.start-wrapper').classList.remove('hide')

const backArrows = document.querySelectorAll('.back-arrow')

backArrows.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.catalog-wrapper').classList.add('hide')
    // document.querySelector('.quiz-wrapper').classList.add('hide')
    // document.querySelector('.results-wrapper').classList.add('hide')
    document.querySelector('.start-wrapper').classList.remove('hide')
  })
})

const catalogBtn = document.querySelector('.btn__catalog')

catalogBtn.addEventListener('click', () => {
  document.querySelector('.start-wrapper').classList.add('hide')
  document.querySelector('.catalog-wrapper').classList.remove('hide')
  fillData(songsData)
})
