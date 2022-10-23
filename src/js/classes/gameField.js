import GameCell from './gameCell.js'

import drawGame from '../utilites/drawGame.js'
import randomPuzzle from '../utilites/randomPuzzle.js'
import movePuzzle from '../utilites/movePuzzle.js'
import timer from '../utilites/timer.js'
import { setLocalStorage, getLocalStorage, setLocalStorageResults, getLocalStorageResults } from '../utilites/localStorage.js'
import * as Tone from 'tone'

class GameField {
  constructor(size) {
    this.size = size
  }

  showGame(isStored) {
    drawGame()
    const field = document.querySelector('.game-field')
    const time = document.querySelector('.time')
    const size = document.querySelector('.frame-size')
    const sizeBtns = document.querySelectorAll('.sizes__button')
    const moves = document.querySelector('.moves')
    const shuffle = document.querySelector('.shuffle')
    const stop = document.querySelector('.stop')
    const save = document.querySelector('.save')
    const results = document.querySelector('.results')
    const sound = document.querySelector('.sound')

    let arr
    let counter
    let sec
    let min
    let winCondition = []
    let isPaused = false
    let isSound = true

    if (isStored) {
      arr = getLocalStorage('arr') || randomPuzzle(this.size)
      counter = getLocalStorage('moves') || 0
      sec = getLocalStorage('sec') || +time.innerText.slice(10, 12) || 0
      min = getLocalStorage('min') || +time.innerText.slice(7, 9) || 0
    } else {
      arr = randomPuzzle(this.size)
      counter = 0
      sec = +time.innerText.slice(10, 12) || 0
      min = +time.innerText.slice(7, 9) || 0
    }

    for (let i = 1; i < this.size * this.size; i++) {
      winCondition.push(i)
    }
    winCondition.push('')

    let interval = setInterval(() => {
      timer(time, sec, min)
      sec++
      if (sec === 60) {
        sec = 0
        min++
      }
    }, 1000)

    sizeBtns.forEach((el) => {
      el.addEventListener('click', () => {
        this.size = +el.innerText[0]
        this.showGame()
      })
    })

    shuffle.addEventListener('click', () => {
      this.showGame(false)
    })

    stop.addEventListener('click', () => {
      if (!isPaused) {
        clearInterval(interval)
        isPaused = true
        stop.style.background = 'gray'
      } else {
        interval = setInterval(() => {
          timer(time, sec, min)
          sec++
          if (sec === 60) {
            sec = 0
            min++
          }
        }, 1000)
        isPaused = false
        stop.style.background = '#0d9095'
      }
    })

    save.addEventListener('click', () => {
      setLocalStorage(arr, this.size, counter, sec, min)
    })

    results.addEventListener('click', () => {
      if (getLocalStorageResults()) {
        console.log(getLocalStorageResults())
        alert(getLocalStorageResults().join(''))
      } else {
        alert('You have no victories yet')
      }
    })

    function setupSynth() {
      window.synth = new Tone.Synth({
        oscillator: {
          type: 'sine',
          modulationFrequency: 0.5,
        },
        envelope: {
          attack: 0,
          decay: 0.2,
          sustain: 0,
          release: 0.5,
        },
      }).toDestination()
    }

    function boopMe() {
      if (!window.synth) {
        setupSynth()
      }

      window.synth.triggerAttackRelease(600, '9n')
    }

    sound.addEventListener('click', () => {
      if (isSound) {
        sound.style.background = 'gray'
        isSound = false
      } else {
        sound.style.background = '#0d9095'
        isSound = true
      }
    })

    timer(time, sec, min)

    size.innerText = `Frame size: ${this.size}x${this.size}`

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let gameCell

        if (+this.size === 3) {
          gameCell = new GameCell(32.3, 32.3)
          gameCell.drawCell().style.fontSize = '3em'
        }
        if (+this.size === 4) {
          gameCell = new GameCell(24, 24)
          gameCell.drawCell().style.fontSize = '3em'
        }
        if (+this.size === 5) {
          gameCell = new GameCell(19, 19)
          gameCell.drawCell().style.fontSize = '2em'
        }
        if (+this.size === 6) {
          gameCell = new GameCell(15.5, 15.5)
          gameCell.drawCell().style.fontSize = '2em'
        }
        if (+this.size === 7) {
          gameCell = new GameCell(13.5, 13.5)
          gameCell.drawCell().style.fontSize = '1.5em'
        }
        if (+this.size === 8) {
          gameCell = new GameCell(11.5, 11.5)
          gameCell.drawCell().style.fontSize = '1.5em'
        }

        gameCell.drawCell().innerHTML = `${arr[i][j]}`

        if (arr[i][j] === '') {
          gameCell.drawCell().classList.add('transparent')
        } else {
          gameCell.drawCell().classList.add('orange')
        }

        gameCell.drawCell().addEventListener('click', () => {
          if (movePuzzle(arr, i, j, this.size, gameCell.width * this.size)) {
            if (isSound) {
              boopMe()
            }
            setTimeout(() => {
              counter++
              document.querySelectorAll('.cell').forEach((el, idx) => {
                el.innerHTML = `${arr.flat(Infinity)[idx]}`
                if (el.innerText === '') {
                  el.classList.remove('orange')
                  el.classList.add('transparent')
                } else {
                  el.classList.remove('transparent')
                  el.classList.add('orange')
                }
              })
              document.querySelectorAll('.cell').forEach((el) => {
                el.style.transition = '0s'
                el.style.transform = 'translateX(0px)'
              })
              moves.innerText = `Moves: ${counter}`
            }, 100)
            setTimeout(() => {
              if (JSON.stringify(arr.flat(Infinity)) === JSON.stringify(winCondition)) {
                setLocalStorageResults(`Size: ${this.size}x${this.size}, time: ${time.innerText.slice(7, 12)}, moves: ${counter}\n`)
                alert(`Hooray! You solved the puzzle in ${time.innerText.slice(7, 12)} and ${counter} moves!`)
              }
            }, 120)
          }
        })
        field.insertAdjacentElement('beforeend', gameCell.drawCell())
      }
    }
    moves.innerText = `Moves: ${counter}`
  }
}

export default GameField
