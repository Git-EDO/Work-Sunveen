const burger = document.querySelector('.header-burger')
const mobileMenu = document.querySelector('.nav')
const closeMenu = document.querySelector('.close-mobile-menu')

burger.addEventListener('click', (e) => {
  burger.classList.add('active')
  mobileMenu.classList.add('active')
})

mobileMenu.addEventListener('click', (e) => {
  if(!e.target.closest('.nav .container')) {
    mobileMenu.classList.remove('active')
    burger.classList.remove('active')
  }
})

closeMenu.addEventListener('click', (e) => {
  mobileMenu.classList.remove('active')
  burger.classList.remove('active')
})
