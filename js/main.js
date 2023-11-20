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

const langResource = {

  ko: {
    subs: "구독",
    total: "전체상품",
    best: "베스트",
    event: "이벤트",
    signin: "로그인",
    signup: "회원가입",
    serv: "구독, 아직도 망설이시나요?",
    firstb: "첫 구매시 샘플 술 증정",
    saleE: "첫 구독은 10% 할인!",
    pointup: "리뷰 쓰면 쌓이는 포인트!",




  },
  en: {
    subs: "Subscribe",
    total: "Items",
    best: "Best",
    event: "Event",
    signin: "Sign In",
    signup: "Sign Up",
    serv: "Still Hesitant?",
    firstb: "Beginner For Sample Liquid",
    saleE: "10% Sale For First Subs!",
    pointup: "Review For Your Accumulate"

  }
}

let mychoic = document.getElementById("languageSelector").value;
updateLanguage(mychoic);

document.getElementById("languageSelector").addEventListener("change", function () {
  mychoic = this.value;
  updateLanguage(mychoic);
});

function updateLanguage(lang) {
  for (let key in langResource[lang]) {

    const element = document.getElementById(key);

    if (element) {
      element.textContent = langResource[lang][key];

    }
  }
}



// $("#topbtn").click(function (x) {
//   x.preventDefault();
//   targetnm = "body";
//   $("body, html").stop(true, true).animate({ scrollTop: $(targernm).offset().top })
// })













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



