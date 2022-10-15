const sliderContent = document.querySelector('.slider__content_wrapper')
const slides = document.querySelectorAll('.slide__wrapper')
const leftArrow = document.querySelector('.slider__arrow-left__wrapper')
const rightArrow = document.querySelector('.slider__arrow-right__wrapper')

let nextContent = sliderContent.cloneNode()
let slidesAmount = [0, 1, 2, 3, 4, 5, 6]

function shuffle(array) {
  return array.sort(() => Math.round(Math.random() * 100) - 50)
}

function changeSlide(width, arrow) {
  shuffle(slidesAmount)
  nextContent.innerHTML = null
  sliderContent.style.transition = 'transform 0.15s'
  sliderContent.style.transform = `translateX(${width}px)`
  arrow.classList.add('arrow_disabled')
  setTimeout(() => {
    slidesAmount.forEach((el) => {
      nextContent.insertAdjacentHTML('afterbegin', sliderContent.children[el].outerHTML)
    })
    sliderContent.innerHTML = nextContent.innerHTML
    sliderContent.style.left = `${-2 * width}px`
    sliderContent.style.transform = `translateX(${2 * width}px)`
  }, 150)
  setTimeout(() => {
    sliderContent.style.left = '0'
    sliderContent.style.transition = 'none'
    sliderContent.style.transform = `translateX(0px)`
    arrow.classList.remove('arrow_disabled')
  }, 600)
}

leftArrow.addEventListener('click', () => {
  if (+window.innerWidth > 1320) {
    changeSlide(1160, leftArrow)
  } else if (+window.innerWidth > 965) {
    changeSlide(940, leftArrow)
  } else if (+window.innerWidth > 585) {
    changeSlide(600, leftArrow)
  }
})

rightArrow.addEventListener('click', () => {
  if (+window.innerWidth > 1320) {
    changeSlide(-1160, rightArrow)
  } else if (+window.innerWidth > 965) {
    changeSlide(-940, rightArrow)
  } else if (+window.innerWidth > 585) {
    changeSlide(-600, rightArrow)
  }
})
