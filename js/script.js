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


// Слайдер на главной

let mainSwiper =new Swiper('.swiper', {

  // Optional parameters
  slidesPerView: 4,
  slidesPerGroup: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },

    // Navigation arrows
    navigation: {
      nextEl: '.navigation-arrow-right',
      prevEl: '.navigation-arrow-left',
    }
});


// 3D карусель

const swiper = new Swiper('.our-works-swiper', {
  effect: 'coverflow',
  centeredSlides: false,

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.navigation-arrow-right',
    prevEl: '.navigation-arrow-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      coverflowEffect: {
        depth: 0,
        rotate: 0,
        slideShadows: false
      }
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      coverflowEffect: {
        depth: 0,
        rotate: 0,
        slideShadows: false
      }
    },
    992: {
      slidesPerView: 3,
      coverflowEffect: {
        depth: 400,
        rotate: 0,
        slideShadows: false
      }
    }
  }
});
