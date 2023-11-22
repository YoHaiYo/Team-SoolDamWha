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
    delay: 3000,
    disableOnInteraction: false
  },


});

var x = topDom = $("#hd").height();
$("#promotion").css("padding-top", topDom);
$(document).ready(function () {
  x;
  $(window).resize(function () {
    x;
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      // $("#hd h1").css("display", "none");
      $("#hd img").attr("src", "./img/main-logo.png");
      $("#hd").addClass('down')



      x;

    } else {
      // $("#hd h1").css("display", "block");
      $("#hd img").attr("src", "./img/hd_logo.png");
      $("#hd").removeClass('down')

      x;
    }
  })

})

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
  speed: 6000,
  speed: 6000,
  centeredSlides: true,
  slidesPerView: 7,
  spaceBetween: 8,
  slidesPerView: 7,
  spaceBetween: 8,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  pagination: {
    el: '#photoRvbox .swiper-pagination',
    clickable: true,
  },
});

function sendInfo() {
  if ($("input[type=checkbox]").is(":checked") == true) {
    alert("성공적으로 전송 완료되었습니다.")
  } else {
    alert("⚠️개인정보수집 이용 동의 체크해주세요.⚠️")
  }
}

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



let more = [`더보기`, `<a href="#itemTitle">닫기</a>`]

let moreButton = ""
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

// 개인정보수집 이용 동의
function sendInfo() {
  if ($("input[type=checkbox]").is(":checked") == true) {
    alert("성공적으로 전송 완료되었습니다.")
  } else {
    alert("⚠️개인정보수집 이용 동의 체크해주세요.⚠️")
  }
}