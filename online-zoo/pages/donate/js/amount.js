const rangeDesktop = document.querySelector('.form__range')
const rangeSmall = document.querySelector('.form__range_small')
const rangeTablet = document.querySelector('.form__range_tablet')
const ticks = document.querySelectorAll('.tick')
const price = document.querySelectorAll('.form-price')
const amount = document.querySelector('.form__number')

function changePrice(range) {
  ticks.forEach((el) => {
    el.classList.remove('tick_active')
  })
  price.forEach((el) => {
    el.classList.remove('item_active')
  })
  const currentTick = document.querySelector(`.tick_${range.value}`)
  const currentPrice = document.querySelector(`.form-price_${range.value}`)
  currentTick.classList.add('tick_active')
  currentPrice.classList.add('item_active')
  amount.value = currentPrice.textContent.slice(1)
}

function hideThumb() {
  rangeDesktop.classList.add('hide-thumb')
  rangeSmall.classList.add('hide-thumb')
  rangeTablet.classList.add('hide-thumb')
}

function showThumb() {
  rangeDesktop.classList.remove('hide-thumb')
  rangeSmall.classList.remove('hide-thumb')
  rangeTablet.classList.remove('hide-thumb')
}

rangeDesktop.addEventListener('click', () => {
  changePrice(rangeDesktop)
  showThumb()
})
rangeSmall.addEventListener('click', () => {
  changePrice(rangeSmall)
  showThumb()
})
rangeTablet.addEventListener('click', () => {
  changePrice(rangeTablet)
  showThumb()
})

rangeDesktop.addEventListener('input', () => {
  changePrice(rangeDesktop)
  showThumb()
})
rangeSmall.addEventListener('input', () => {
  changePrice(rangeSmall)
  showThumb()
})
rangeTablet.addEventListener('input', () => {
  changePrice(rangeTablet)
  showThumb()
})

window.addEventListener('resize', () => {
  showThumb()
  if (+window.innerWidth > 1320) {
    rangeDesktop.value = 6
    changePrice(rangeDesktop)
  } else if (+window.innerWidth > 965) {
    rangeSmall.value = 6
    changePrice(rangeSmall)
  } else {
    rangeTablet.value = 6
    changePrice(rangeTablet)
  }
})

amount.addEventListener('input', () => {
  showThumb()
  if (+amount.value === 5000) {
    rangeDesktop.value = 1
    changePrice(rangeDesktop)
  } else if (+amount.value === 2000) {
    rangeDesktop.value = 2
    changePrice(rangeDesktop)
    rangeSmall.value = 1
    changePrice(rangeSmall)
  } else if (+amount.value === 1000) {
    rangeDesktop.value = 3
    rangeSmall.value = 3
    changePrice(rangeDesktop)
    changePrice(rangeSmall)
  } else if (+amount.value === 500) {
    rangeDesktop.value = 4
    rangeSmall.value = 4
    rangeTablet.value = 4
    changePrice(rangeDesktop)
    changePrice(rangeSmall)
    changePrice(rangeTablet)
  } else if (+amount.value === 250) {
    rangeDesktop.value = 5
    rangeSmall.value = 5
    rangeTablet.value = 5
    changePrice(rangeDesktop)
    changePrice(rangeSmall)
    changePrice(rangeTablet)
  } else if (+amount.value === 100) {
    rangeDesktop.value = 6
    rangeSmall.value = 6
    rangeTablet.value = 6
    changePrice(rangeDesktop)
    changePrice(rangeSmall)
    changePrice(rangeTablet)
  } else if (+amount.value === 50) {
    rangeDesktop.value = 7
    rangeSmall.value = 7
    rangeTablet.value = 7
    changePrice(rangeDesktop)
    changePrice(rangeSmall)
    changePrice(rangeTablet)
  } else if (+amount.value === 25) {
    rangeDesktop.value = 8
    rangeSmall.value = 8
    rangeTablet.value = 8
    changePrice(rangeDesktop)
    changePrice(rangeSmall)
    changePrice(rangeTablet)
  } else {
    ticks.forEach((el) => {
      el.classList.remove('tick_active')
    })
    price.forEach((el) => {
      el.classList.remove('item_active')
    })
    hideThumb()
  }
  if (+window.innerWidth <= 1320 && +amount.value === 5000) {
    hideThumb()
  }
  if (+window.innerWidth <= 965 && (+amount.value === 5000 || +amount.value === 2000 || +amount.value === 1000)) {
    hideThumb()
  }
})
