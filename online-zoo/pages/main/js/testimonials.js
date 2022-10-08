let testimonialsContent = document.querySelector('.testimonials__content')
let testimonialsRange = document.querySelector('.testimonials__range')
let testimonialsPopup = document.querySelector('.testimonial-popup')
let testimonialsPopupContent = document.querySelector('.testimonial-popup__content')
let testimonials = document.querySelectorAll('.testimonial')
let testimonialsCross = document.querySelector('.cross_popup')
let header = document.querySelector('.header__wrapper')

testimonialsRange.addEventListener('input', () => {
  if (+window.innerWidth > 1320) {
    testimonialsContent.style.transform = `translateX(-${testimonialsRange.value * 296}px)`
  }
  if (+window.innerWidth <= 1320) {
    testimonialsContent.style.transform = `translateX(-${testimonialsRange.value * 323}px)`
  }
})

function showTestimonial() {
  if (+window.innerWidth <= 965) {
    testimonialsPopup.classList.remove('hide')
    blackout.classList.remove('hide')
    header.classList.add('header-hide')
  }
}

function hideTestimonial() {
  if (+window.innerWidth <= 965) {
    testimonialsPopup.classList.add('hide')
    blackout.classList.add('hide')
    header.classList.remove('header-hide')
  }
}

testimonials.forEach((el, idx) => {
  el.addEventListener('click', () => {
    let popupContent = testimonials[idx].cloneNode(true)
    popupContent.classList.add('testimonial_popup')
    testimonialsPopupContent.innerHTML = popupContent.outerHTML
    showTestimonial()
  })
})

blackout.addEventListener('click', hideTestimonial)
testimonialsCross.addEventListener('click', hideTestimonial)
