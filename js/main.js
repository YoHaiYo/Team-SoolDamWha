const mainSwiper = new Swiper('#mainSwiper.swiper', {
  // 자동롤링 4초마다
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // 센터모드
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 3,
  // 1.8걸침
  slidesPerView: 1.8,
  // 반복
  loop: true,
  
  direction: 'horizontal',
  pagination: {
    el: '#mainSwiper .swiper-pagination',
  },
});