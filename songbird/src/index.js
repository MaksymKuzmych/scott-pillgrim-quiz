import './index.html'
import './index.scss'
import startPage from './components/start-page/start.html'

const main = document.querySelector('.main')

main.insertAdjacentHTML('beforeend', startPage)
