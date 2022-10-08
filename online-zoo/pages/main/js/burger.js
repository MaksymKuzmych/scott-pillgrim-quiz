let burgerIcon = document.querySelector('.burger-menu__icon')
let burgerPopUp = document.querySelector('.burger-popup')
let burgerCross = document.querySelector('.cross_burger')
let blackout = document.querySelector('.blackout')

function hideBurger() {
  burgerPopUp.classList.remove('burger-show')
  blackout.classList.add('hide')
}

function showBurger() {
  burgerPopUp.classList.add('burger-show')
  blackout.classList.remove('hide')
}

burgerIcon.addEventListener('click', showBurger)
burgerCross.addEventListener('click', hideBurger)
blackout.addEventListener('click', hideBurger)
