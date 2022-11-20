import { result } from '../quiz-page/quiz.js'

export default function showResults(lang) {
  const resultsText = document.querySelector('.results__text')

  if (lang === 'EN' && result === 30) {
    resultsText.innerText = `You have earned maximum points (30/30) and received the power of RESPECT!`
  } else if (lang === 'RU' && result === 30) {
    resultsText.innerText = `Вы заработали максимальное количество баллов (30/30) и получили силу РЕСПЕКТА!`
  } else if (lang === 'EN') {
    resultsText.innerText = `You have earned ${result}/30 points`
  } else {
    resultsText.innerText = `Вы набрали ${result}/30 баллов`
  }
}
