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
  spaceBetween: 30,
  slidesPerView: 5.5,
  loop: false,

  direction: 'horizontal',
  pagination: {
    el: '#bestTitle .swiper-pagination',
  },
  navigation: {
    nextEl: '#bestTitle .swiper-button-next',
    prevEl: '#bestTitle .swiper-button-prev',
  }
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
spyEls.forEach(function (spyEl) {
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


// 메뉴 클릭시 바뀌는

$(function () {

  $("#itemTitle .itemTitleBox .menu-1").click(function () {
    $("#itemTitle .itemImgWrap").removeClass("on")
    $("#itemTitle .damhwa").addClass("on")
  })

  $("#itemTitle .itemTitleBox .menu-2").click(function () {
    $("#itemTitle .itemImgWrap").removeClass("on")
    $("#itemTitle .gwashilju").addClass("on")
  })



  // $("#itemTitle .itemTitleBox > li").click(function () {
  //   if ($(this).index(0)) {
  //     $("#itemTitle .damhwa").addClass("on")
  //   } else if ($(this).index(1)) {
  //     $("#itemTitle .gwashilju").addClass("on")
  //   }



  //   console.log($(this).index())
  // })
})