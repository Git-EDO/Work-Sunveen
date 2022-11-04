const burger = document.querySelector('.header-burger')
const mobileMenu = document.querySelector('.nav')
const closeMenu = document.querySelector('.close-mobile-menu')

burger.addEventListener('click', (e) => {
  burger.classList.add('active')
  mobileMenu.classList.add('active')
})

mobileMenu.addEventListener('click', (e) => {
  if (!e.target.closest('.nav .container')) {
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

callPopupBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    headerPopup.classList.add('active')
  })
})

closePopup.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.closest('.popup').classList.remove('active')
  })
})

headerPopup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup-body')) {
    headerPopup.classList.remove('active')
  }
})

// Popup promos

const promoLinks = document.querySelectorAll('.promo-link')
const promoPopup = document.querySelector('.promo-popup')

if(promoLinks.length > 0) {
  promoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      promoPopup.classList.add('active')
    })
  })
}

if(promoPopup) {
  promoPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-body')) {
      promoPopup.classList.remove('active');
    }
  })
}



// Слайдер на главной

let mainSwiper = new Swiper('.swiper', {
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
  },
})

// 3D карусель

const swiper = new Swiper('.our-works-swiper', {
  effect: 'coverflow',
  centeredSlides: false,

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
        slideShadows: false,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      coverflowEffect: {
        depth: 0,
        rotate: 0,
        slideShadows: false,
      },
    },
    992: {
      slidesPerView: 3,
      coverflowEffect: {
        depth: 400,
        rotate: 0,
        slideShadows: false,
      },
    },
  },
})

// Слайдер сертификатов

const certificatesSwiper = new Swiper('.certificates-swiper', {

  navigation: {
    nextEl: '.navigation-arrow-right',
    prevEl: '.navigation-arrow-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
})

// Карта

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.map')) {
    ymaps.ready(init)


    function init() {
      const map = new ymaps.Map('map', {
        center: [54.74523049679196, 20.456964491677958],
        zoom: 16,
      })
  
      let placemark = new ymaps.Placemark(
        [54.74654503730708, 20.463295042327765],
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: './img/map/geo.svg',
          iconImageSize: [40, 40],
          iconImageOffset: [-13, -50],
        }
      )
  
      map.controls.remove('geolocationControl') // удаляем геолокацию
      map.controls.remove('searchControl') // удаляем поиск
      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl') // удаляем контрол зуммирования
      map.controls.remove('rulerControl') // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
      map.geoObjects.add(placemark)
    }
  }
})


// Footer scroll

const foolterScrollLink = document.querySelector('.footer-scroll-link')

foolterScrollLink.addEventListener('click', (e) => {
  e.preventDefault()
  const wrapper = document.querySelector('.wrapper')
  wrapper.scrollIntoView({ block: 'start', behavior: 'smooth' })
})

// Скролл до контактов

const contactsHeaderScroll = document.querySelectorAll('.contacts-scroll')

if (contactsHeaderScroll.length > 0) {
  contactsHeaderScroll.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const mapSection = document.querySelector('.map-section')
      mapSection.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
  })
}

// Маска для телефонов

const phones = document.querySelectorAll('.phone')

if (phones.length > 0) {
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  }
  phones.forEach((input) => {
    const mask = IMask(input, maskOptions)
  })
}

// Управление логотипами

const partnersLogos = document.querySelectorAll('.partners-item')
const activePartnersLogo = document.querySelector('.active-partners-item')


if (partnersLogos.length > 0) {
  partnersLogos.forEach((logo) => {
    console.log(logo)
    logo.addEventListener('mouseover', (e) => {
      if(!e.target.closest('.active-partners-item')) {
        const logoImg = logo.querySelector('.partner-logo img')
        logoImg.src = logoImg.dataset.colorimg
        activePartnersLogo.classList.remove('active')
        activePartnersLogo.querySelector('.partner-logo img').src = activePartnersLogo.querySelector('.partner-logo img').dataset.filterimg
      } else {
        activePartnersLogo.classList.remove('active')
      }
    })
  })

  partnersLogos.forEach((logo) => {
    logo.addEventListener('mouseout', (e) => {

      if(!e.target.closest('.active-partners-item')) {
        const logoImg = logo.querySelector('.partner-logo img')
        logoImg.src = logoImg.dataset.filterimg
        activePartnersLogo.classList.add('active')
        activePartnersLogo.querySelector('.partner-logo img').src = activePartnersLogo.querySelector('.partner-logo img').dataset.colorimg
      } else {
        activePartnersLogo.classList.add('active')
      }
    })
  })
}

// Сертификаты

const certSwiper = document.querySelector('.certificates-swiper')

if(certSwiper) {
  $(document).ready(function() {
    $('.certificate-item').magnificPopup({type:'image'});
  });
  
  $('.certificate-swiper-slide').magnificPopup({
    delegate: 'a',
    type: 'image'
    // other options
  });
}





const miniProductImgs = document.querySelectorAll('.product-mini-item')
const zoomProductImg = document.querySelector('.products-zoom-img img')

const zoomArrowLeft = document.querySelector('.products-zoom-img .navigation-arrow-left')
const zoomArrowRight = document.querySelector('.products-zoom-img .navigation-arrow-right')

document.addEventListener('DOMContentLoaded', () => {

  

  if(miniProductImgs.length > 0) {

    let i = 0;
const miniImgs = Array.from(miniProductImgs)

// Управление переключением фотографий зум-изображения

zoomArrowRight.addEventListener('click', () => {
  if(i >= miniImgs.length-1) {
    i = 0
  } else {
    i++
  }
  miniProductImgs.forEach(el => el.classList.remove('active'))
  miniImgs[i].classList.add('active')
  zoomProductImg.src = miniImgs[i].querySelector('img').src
})

zoomArrowLeft.addEventListener('click', () => {
  if(i <= 0) {
    i = miniImgs.length-1
  } else {
    i--
  }
  miniProductImgs.forEach(el => el.classList.remove('active'))
  miniImgs[i].classList.add('active')
  zoomProductImg.src = miniImgs[i].querySelector('img').src
})

// Управление зум-изображением продукта

    miniProductImgs[0].classList.add('active')
    zoomProductImg.src = document.querySelector('.product-mini-item.active img').src

    miniProductImgs.forEach(image => {
      image.addEventListener('click', () => {
        miniProductImgs.forEach(el => el.classList.remove('active'))
        image.classList.add('active')
        i = miniImgs.indexOf(image)
        const thisImage = image.querySelector('img')
        zoomProductImg.src = thisImage.src
      })
    })

  }

})