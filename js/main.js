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
  $("#itemTitle .Imgbox").hide()
  $('#itemTitle .set').show()

  let menufilter = "";

  $("#itemTitle .itemTitleBox li").click(function () {

    menufilter = $(this).data("filter");
    $("#itemTitle .Imgbox").hide()
    $(menufilter).show()
    $("#itemTitle .hideMenu").removeClass("on")

    $(this).addClass("on").siblings().removeClass("on")
  })

})



var more = ["더보기", "닫기"]

let moreButton = "true"
moreButton = $("#itemTitle button").html(more[0])



document.querySelector("#itemTitle button").addEventListener("click", function () {
  this.classList.toggle('on')

  moreButton = this.classList.contains('on')
  if (moreButton) {
    $("#itemTitle button").html(more[1])
    $("#itemTitle .hideMenu").addClass("on")
  } else {
    $("#itemTitle button").html(more[0])
    $("#itemTitle .hideMenu").removeClass("on")

  }

})

let cloTop = ""

$("#itemTitle button").click(function (e) {
  e.preventDefault();
  cloTop = $(".scrollTop").attr('href');
  $(this).stop(true, true).animate({ scrollTop: $(cloTop).offset().top })
  console.log(cloTop)
})