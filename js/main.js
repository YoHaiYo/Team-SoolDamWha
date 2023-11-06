const promotionSwiper = new Swiper('#promotionSwiper.swiper', {
  // 자동롤링 4초마다
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  spaceBetween: 300,
  // 반복
  loop: true,
  
  direction: 'horizontal',
  pagination: {
    el: '#promotionSwiper .swiper-pagination',
  },
  navigation: {
    nextEl: '#promotionSwiper .swiper-button-next',
    prevEl: '#promotionSwiper .swiper-button-prev',
  }
});