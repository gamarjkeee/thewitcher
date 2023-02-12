new Swiper(".slider", {
  mousewheel: true,
  spaceBetween: 18,
  parallax: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
      speed: 1200,
    },
    426: {
      slidesPerView: 1,
      spaceBetween: 14,
      speed: 1800,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 2400,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 18,
      speed: 2400,
    },
  },
});
