const burger = document.querySelector('.header-burger')
const mobileMenu = document.querySelector('.nav')
const closeMenu = document.querySelector('.close-mobile-menu')
const body = document.querySelector('body')
const lockPaddingEls = document.querySelectorAll('.lock-padding')

burger.addEventListener('click', (e) => {
  bodyLock()
  burger.classList.add('active')
  mobileMenu.classList.add('active')
})

mobileMenu.addEventListener('click', (e) => {
  if (!e.target.closest('.nav .container')) {
    bodyLock()
    mobileMenu.classList.remove('active')
    burger.classList.remove('active')
  }
})

closeMenu.addEventListener('click', (e) => {
  bodyLock()
  mobileMenu.classList.remove('active')
  burger.classList.remove('active')
})

// Header popup

const headerPopup = document.querySelector('.header-popup')
const closePopup = document.querySelectorAll('.popup-close')
const callPopupBtns = document.querySelectorAll('.call-btn')

callPopupBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    bodyLock()
    headerPopup.classList.add('active')
  })
})

closePopup.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    bodyLock()
    btn.closest('.popup').classList.remove('active')
  })
})

headerPopup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup-body')) {
    bodyLock()
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
      bodyLock()
      promoPopup.classList.add('active')
    })
  })
}

if(promoPopup) {
  promoPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-body')) {
      bodyLock()
      promoPopup.classList.remove('active');
    }
  })
}

// Complex work popup

const complexLinks = document.querySelectorAll('.complex-work-slide')
const complexPopup = document.querySelector('.complex-popup')

if(complexLinks.length > 0) {
  complexLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      bodyLock()
      complexPopup.classList.add('active')
    })
  })
}

if(complexPopup) {
  complexPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-body')) {
      bodyLock()
      complexPopup.classList.remove('active');
    }
  })
}

// Product popup

const productBtn = document.querySelector('.product-description-btn')
const productPopup = document.querySelector('.product-popup')

if(productBtn) {
  productBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bodyLock()
    productPopup.classList.add('active')
  })
}

if(productPopup) {
  productPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-body')) {
      bodyLock()
      productPopup.classList.remove('active');
    }
  })
}

// Body lock

function bodyLock() {

  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  if(body.classList.contains('lock')) {
    body.classList.remove('lock');
    lockPaddingEls.forEach(element => {
      element.style.paddingRight = 0
    })
  } else {
    body.classList.add('lock');
    lockPaddingEls.forEach(element => {
      element.style.paddingRight = lockPaddingValue
    })
  }
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

// Слайдер комплексных работ

// Слайдер на главной

let complexSwiper = new Swiper('.complex-work-swiper', {
  // Optional parameters
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  pagination: {
    el: '.complex-work-swiper-pagination',
    clickable: true,
  },
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
          iconImageOffset: [-13, -25],
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

// Скролл до партнёров

const partnersHeaderScroll = document.querySelectorAll('.partners-scroll')

if (partnersHeaderScroll.length > 0) {
  partnersHeaderScroll.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const partnersSection = document.getElementById('partners')
      partnersSection.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
  })
}

// Скролл до технического описания

const technicalDescScroll = document.querySelector('.technical-description-btn')

if (technicalDescScroll) {
  technicalDescScroll.addEventListener('click', (e) => {
    e.preventDefault()
    const technicalDescriptionText = document.querySelector('.technical-description-body')
    technicalDescriptionText.scrollIntoView({ block: 'start', behavior: 'smooth' })
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



// Зум-изображение товара

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

// Ленивая загрузка изображений

const lazyImages = document.querySelectorAll('img[data-src]')
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if(lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if(img.dataset.src) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY)
      lazyScrollCheck()
    }
  })
};

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
  if(document.querySelectorAll('img[data-src]').length > 0) {
    lazyScrollCheck()
  }
};

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex (
    item => scrollY > item - windowHeight
  );
  if(imgIndex >= 0) {
    if(lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute('data-src');
    }
    delete lazyImagesPositions[imgIndex];
  }
};

// Галерея для изображений

if(lazyImages.length > 0) {
  $(document).ready(function() {
    $('.gallery-item').magnificPopup({type:'image'});
  });
  
  // $('.certificate-swiper-slide').magnificPopup({
  //   delegate: 'a',
  //   type: 'image'
  //   // other options
  // });
}

// Загрузка дополнительных изображений

const loadMore2 = document.querySelector('.load-more-btn2')
const loadMore3 = document.querySelector('.load-more-btn3')

if(loadMore2) {
  loadMore2.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.second-gallery-grid').style.display = 'grid'
    loadMore2.closest('.load-more-button').style.display = 'none'
    loadMore3.closest('.load-more-button').style.display = 'flex'
  })
}

if(loadMore3) {
  loadMore3.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.third-gallery-grid').style.display = 'grid'
    loadMore3.closest('.load-more-button').style.display = 'none'
  })
}