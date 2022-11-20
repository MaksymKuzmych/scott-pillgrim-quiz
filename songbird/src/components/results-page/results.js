import { result } from '../quiz-page/quiz.js'

export default function showResults(lang) {
  const resultsText = document.querySelector('.results__text')

  if (lang === 'EN' && result === 36) {
    resultsText.innerText = `You have earned maximum points (36/36) and received the power of RESPECT!`
  } else if (lang === 'RU' && result === 36) {
    resultsText.innerText = `Вы заработали максимальное количество баллов (36/36) и получили силу РЕСПЕКТА!`
  } else if (lang === 'EN') {
    resultsText.innerText = `You have earned ${result}/36 points`
  } else {
    resultsText.innerText = `Вы набрали ${result}/36 баллов`
  }
}
