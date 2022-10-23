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

  let inversions = 0
  let checkedArr = array.filter((el) => el !== '')

  if (size % 2 !== 0) {
    checkedArr.forEach((el, idx) => {
      inversions += checkedArr.slice(idx + 1).filter((el1) => el > el1).length
    })

    while (inversions % 2 !== 0) {
      inversions = 0
      array = array.sort(() => Math.round(Math.random() * 100) - 50)
      checkedArr = array.filter((el) => el !== '')
      checkedArr.forEach((el, idx) => {
        inversions += checkedArr.slice(idx + 1).filter((el1) => el1 < el).length
      })
    }
  }

  if (size % 2 === 0) {
    checkedArr.forEach((el, idx) => {
      inversions += checkedArr.slice(idx + 1).filter((el1) => el > el1).length
    })
    inversions += Number.parseInt(array.indexOf('') / size)

    while (inversions % 2 === 0) {
      inversions = 0
      array = array.sort(() => Math.round(Math.random() * 100) - 50)
      checkedArr = array.filter((el) => el !== '')
      checkedArr.forEach((el, idx) => {
        inversions += checkedArr.slice(idx + 1).filter((el1) => el1 < el).length
      })
      inversions += Number.parseInt(array.indexOf('') / size)
    }
  }

  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

export default randomPuzzle
