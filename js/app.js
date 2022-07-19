// menu

const iconSearch = document.querySelector('.header__search')
const iconCart = document.querySelector('.header__cart')
const iconMenu = document.querySelector('.header__menu-icon')

if (iconMenu) {
  const menuList = document.querySelector('.header__menu-list')
  iconMenu.addEventListener('click', function (e) {
    iconSearch.classList.toggle('active')
    iconCart.classList.toggle('active')
    iconMenu.classList.toggle('active')
    menuList.classList.toggle('active')
  })
}

// slider swiper

let pageSlider = new Swiper('.section-slider', {
  wrapperClass: 'section-slider__body',
  slideClass: 'section-slider__slide',
  direction: 'horizontal',
  slidesPerView: 1,
  parallax: true,
  loop: true,
  keyboard: {
    enabled: true,
    onlyViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensivity: 1,
  },
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.section-slider__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'section-slider__pagination-bullet',
    bulletActiveClass: 'section-slider__pagination-bullet_active',
  },
  watchOverflow: true,
  speed: 800,
  observer: true,
  observeParents: true,
  observeSliderChildren: true,
})
