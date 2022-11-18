import { result } from '../quiz-page/quiz.js'

export default function showResults() {
  const resultsText = document.querySelector('.results__text')

  resultsText.innerText = `Вы набрали ${result}/36 баллов`
}
