const testimonialsContent = document.querySelector('.testimonials__content')
const testimonialsRange = document.querySelector('.testimonials__range')
const testimonialsPopup = document.querySelector('.testimonial-popup')
const testimonialsPopupContent = document.querySelector('.testimonial-popup__content')
const testimonials = document.querySelectorAll('.testimonial')
const testimonialsCross = document.querySelector('.cross_popup')
const header = document.querySelector('.header__wrapper')

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
  testimonialsPopup.classList.add('hide')
  blackout.classList.add('hide')
  header.classList.remove('header-hide')
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

window.addEventListener('resize', () => {
  if (+window.innerWidth > 1320) {
    hideTestimonial()
    testimonialsContent.style.transform = `translateX(-${testimonialsRange.value * 296}px)`
  }
  if (+window.innerWidth <= 1320 && +window.innerWidth > 965) {
    hideTestimonial()
    testimonialsContent.style.transform = `translateX(-${testimonialsRange.value * 323}px)`
  }
  if (+window.innerWidth <= 965) {
    testimonialsContent.style.transform = `translateX(0px)`
  }
})
