import './index.html'
import './index.scss'
import gameField from './js/classes/gameField.js'
import { getLocalStorage } from './js/utilites/localStorage.js'

let game = new gameField(getLocalStorage('size') || 4)

game.showGame(true)
