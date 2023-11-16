var swiperMain = new Swiper('#promotionSwiper .swiper', {


  loop: true,


  effect: "fade",
  speed: 2000,

  centeredSlides: true,



  navigation: {
    nextEl: '#promotionSwiper .swiper-button-next',
    prevEl: '#promotionSwiper .swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },


});

const bestSwiper = new Swiper('#bestTitle .swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  slidesPerView: 1.5,
  loop: false,
  
  direction: 'horizontal',
  pagination: {
    el: '#bestTitle .swiper-pagination',
  },
  navigation: {
    nextEl: '#bestTitle .swiper-button-next',
    prevEl: '#bestTitle .swiper-button-prev',
  },
  breakpoints: {
    // 535: {
    //   slidesPerView: 1.5,
    // },
    735: {
      slidesPerView: 2.5,
    },
    1035: {
      slidesPerView: 3.5,
    },
    1335: {
      slidesPerView: 4.5,
    },
    1665: {
      slidesPerView: 5.5,
    },
  },
});

const review = new Swiper('#photoRvbox .swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 6,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#photoRvbox .swiper-pagination',
    clickable: true,
  },


});

/// ScrollMagic : 스크롤 됬을때 애니메이션 실행하기
const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트 상단에서 80% 스크롤됬을때 실행
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// AOS
AOS.init({
  duration: 600,
})


// 베스트 타이틀 선택시 메뉴 나오게
$(document).ready(function(){
  // console.log('hi')
  $('#itemTitle .menu-btn-1').click(function(){
    $('#itemTitle .itemImgWrap_margin').removeClass('selected')
    $('#itemTitle .menu-1').addClass('selected')
  })
  $('#itemTitle .menu-btn-2').click(function(){
    $('#itemTitle .itemImgWrap_margin').removeClass('selected')
    
    $('#itemTitle .menu-2').addClass('selected')
  })
})