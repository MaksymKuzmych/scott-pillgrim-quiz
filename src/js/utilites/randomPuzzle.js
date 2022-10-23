function randomPuzzle(size) {
  let array = []
  function makeArrFromSize(cells) {
    for (let i = 1; i < cells; i++) {
      array.push(i)
    }
    array.unshift('')
  }
  switch (size) {
    case 3:
      makeArrFromSize(3 * 3)
      break
    case 4:
      makeArrFromSize(4 * 4)
      break
    case 5:
      makeArrFromSize(5 * 5)
      break
    case 6:
      makeArrFromSize(6 * 6)
      break
    case 7:
      makeArrFromSize(7 * 7)
      break
    case 8:
      makeArrFromSize(8 * 8)
      break
    default:
      makeArrFromSize(4 * 4)
      break
  }
  array = array.sort(() => Math.round(Math.random() * 100) - 50)
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

export default randomPuzzle
