let swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  initialSlide: 0,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});