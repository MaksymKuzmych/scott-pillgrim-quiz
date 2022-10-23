export function setLocalStorage(arr, size, moves, sec, min) {
  localStorage.setItem(
    'game',
    JSON.stringify({
      arr,
      size,
      moves,
      sec,
      min,
    })
  )
}

export function setLocalStorageResults(result) {
  if (JSON.parse(localStorage.getItem('results'))) {
    let res = JSON.parse(localStorage.getItem('results'))
    if (res.length < 10) {
      res.unshift(result)
    } else {
      res.pop()
      res.unshift(result)
    }
    localStorage.setItem('results', JSON.stringify(res))
  } else {
    localStorage.setItem('results', JSON.stringify([result]))
  }
}

export function getLocalStorage(value) {
  if (JSON.parse(localStorage.getItem('game'))) {
    let obj = JSON.parse(localStorage.getItem('game'))
    return obj[value]
  }
}

export function getLocalStorageResults() {
  if (JSON.parse(localStorage.getItem('results'))) {
    return JSON.parse(localStorage.getItem('results'))
  }
}
