let swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    426: {
      slidesPerView: 2,
      centeredSlides : true,
    },
    769: {
      slidesPerView: 3,
      centeredSlides : true,
    }
  },
  grabCursor: true,
  // initialSlide: 0,
  // spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});