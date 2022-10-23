function movePuzzle(arr, i, j, size, cellWidth) {
  if (j < size - 1 && arr[i][j + 1] === '') {
    ;[arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]]
    document.querySelectorAll('.cell').forEach((el) => {
      if (el.innerText === String(arr[i][j + 1])) {
        el.style.transition = '0.1s'
        el.style.transform = `translateX(${cellWidth}%)`
      }
    })
    return true
  }
  if (j > 0 && arr[i][j - 1] === '') {
    ;[arr[i][j], arr[i][j - 1]] = [arr[i][j - 1], arr[i][j]]
    document.querySelectorAll('.cell').forEach((el) => {
      if (el.innerText === String(arr[i][j - 1])) {
        el.style.transition = '0.1s'
        el.style.transform = `translateX(${-cellWidth}%)`
      }
    })
    return true
  }
  if (i > 0 && arr[i - 1][j] === '') {
    ;[arr[i][j], arr[i - 1][j]] = [arr[i - 1][j], arr[i][j]]
    document.querySelectorAll('.cell').forEach((el) => {
      if (el.innerText === String(arr[i - 1][j])) {
        el.style.transition = '0.1s'
        el.style.transform = `translateY(${-cellWidth}%)`
      }
    })
    return true
  }
  if (i < size - 1 && arr[i + 1][j] === '') {
    ;[arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]]
    document.querySelectorAll('.cell').forEach((el) => {
      if (el.innerText === String(arr[i + 1][j])) {
        el.style.transition = '0.1s'
        el.style.transform = `translateY(${cellWidth}%)`
      }
    })
    return true
  }
  return false
}

export default movePuzzle
