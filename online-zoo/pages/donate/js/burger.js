let burgerIcon = document.querySelector('.burger-menu__icon')
let burgerPopUp = document.querySelector('.burger-popup')
let burgerCross = document.querySelector('.cross_burger')
let blackout = document.querySelector('.blackout')

function hideOrShowBurger() {
  burgerPopUp.classList.toggle('burger-show')
  blackout.classList.toggle('hide')
}

burgerIcon.addEventListener('click', hideOrShowBurger)
burgerCross.addEventListener('click', hideOrShowBurger)
blackout.addEventListener('click', hideOrShowBurger)
