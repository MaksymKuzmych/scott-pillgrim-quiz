const burgerIcon = document.querySelector('.burger-menu__icon')
const burgerPopUp = document.querySelector('.burger-popup')
const burgerCross = document.querySelector('.cross_burger')
const blackout = document.querySelector('.blackout')

function hideOrShowBurger() {
  burgerPopUp.classList.toggle('burger-show')
  blackout.classList.toggle('hide')
}

burgerIcon.addEventListener('click', hideOrShowBurger)
burgerCross.addEventListener('click', hideOrShowBurger)
blackout.addEventListener('click', hideOrShowBurger)
