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

// Header popup 

const headerPopup = document.querySelector('.header-popup')
const closePopup = document.querySelectorAll('.popup-close')
const callPopupBtns = document.querySelectorAll('.call-btn')

callPopupBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    headerPopup.classList.add('active')
  })
})

closePopup.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btn.closest('.popup').classList.remove('active')
  })
})

headerPopup.addEventListener('click', (e) => {
  if(!e.target.closest('.popup-body')) {
    headerPopup.classList.remove('active')
  }
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


// Карта

ymaps.ready(init)

function init() {
  const map = new ymaps.Map('map', {
    center: [54.74523049679196,20.456964491677958],
    zoom: 16
  });

  let placemark = new ymaps.Placemark([54.74654503730708,20.463295042327765], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map/geo.svg',
    iconImageSize: [40, 40],
    iconImageOffset: [-13, -50]
  })

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}

// Footer scroll

const foolterScrollLink = document.querySelector('.footer-scroll-link')

foolterScrollLink.addEventListener('click', (e) => {
  e.preventDefault()
  const wrapper = document.querySelector('.wrapper')
  wrapper.scrollIntoView({block: "start", behavior: "smooth"});
})


// Маска для телефонов

const phones = document.querySelectorAll('.phone');

if(phones.length > 0) {  
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    phones.forEach(input => {
      const mask = IMask(input, maskOptions);
    })
}