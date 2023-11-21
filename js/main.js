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
// 글로벌-----------------------------------------------
const langResource = {

  ko: {
    gnb: [
      {
        nm: "구독",
        href: "#",
        cls: "",
        target: ""
      },
      {
        nm: "전체상품",
        href: "#itemTitle",
        cls: "scrolla",
        target: ""
      },
      {
        nm: "베스트",
        href: "#bestTitle",
        cls: "scrolla",
        target: ""
      },
      {
        nm: "이벤트",
        href: "#",
        cls: "",
        target: ""
      },
      {
        nm: "Q & A",
        href: "",
        cls: "",
        target: ""
      }

    ],
    login: [
      {
        nm: "로그인",
        href: "",
        cls: "mx-3",
        target: ""
      },
      {
        nm: "회원가입",
        href: "",
        cls: "mx-3",
        target: ""
      }

    ],
    promotion: [
      {
        scls: "bgimg1",
        ccls: "effecttext",
        href: "",
        content: {
          strong: "첫 구매시 샘플 술 증정",
          p: "신규 가입하고 | 궁금했던 술 체험해보세요."
        }
      },
      {
        scls: "bgimg2",
        ccls: "effecttext",
        href: "",
        content: {
          strong: "첫 구독은 10% 할인!",
          p: "신규 가입 혜택받고 | 소믈리에가 엄선한 전통주를 | 매월 경험하세요."
        }
      },
      {
        scls: "bgimg3",
        ccls: "effecttext",
        href: "",
        content: {
          strong: "리뷰 쓰면 쌓이는 포인트!",
          p: "sns 후기 인증 시 2,000원 적립"
        }
      }
    ]

    //     subs: "구독",
    //     total: "전체상품",
    //     best: "베스트",
    //     event: "이벤트",
    //     signin: "로그인",
    //     signup: "회원가입",
    //     serv: "구독, 아직도 망설이시나요?",
    //     firstb: "첫 구매시 샘플 술 증정",
    //     saleE: "첫 구독은 10% 할인!",
    //     pointup: "리뷰 쓰면 쌓이는 포인트!",







  },
  en: {
    gnb: [
      {
        nm: "Subscribe",
        href: "#",
        cls: "",
        target: ""
      },
      {
        nm: "Items",
        href: "#itemTitle",
        cls: "scrolla",
        target: ""
      },
      {
        nm: "Best",
        href: "#bestTitle",
        cls: "scrolla",
        target: ""
      },
      {
        nm: "Event",
        href: "#",
        cls: "",
        target: ""
      }

    ],
    login: [
      {
        nm: "Sign In",
        href: "",
        cls: "mx-3",
        target: ""
      },
      {
        nm: "Sign Up",
        href: "",
        cls: "mx-3",
        target: ""
      }

    ],
    promotion: [
      {
        scls: "bgimg1",
        ccls: "effecttext",
        href: "",
        content: {
          strong: "Beginner For Sample Liquid",
          p: "신규 가입하고 | 궁금했던 술 체험해보세요."
        }
      },
      {
        scls: "bgimg2",
        ccls: "effecttext",
        href: "",
        content: {
          strong: "10% Sale For First Subs!",
          p: "신규 가입 혜택받고 | 소믈리에가 엄선한 전통주를 | 매월 경험하세요."
        }
      },
      {
        scls: "bgimg3",
        ccls: "effecttext",
        href: "",
        content: {
          strong: "Review For Your Accumulate",
          p: "sns 후기 인증 시 2,000원 적립"
        }
      }]

  }




  //   en: {
  //     subs: "Subscribe",
  //     total: "Items",
  //     best: "Best",
  //     event: "Event",
  //     signin: "Sign In",
  //     signup: "Sign Up",
  //     serv: "Still Hesitant?",
  //     firstb: "Beginner For Sample Liquid",
  //     saleE: "10% Sale For First Subs!",
  //     pointup: "Review For Your Accumulate",


  //   }
}



let gnbtags = '';

for (x in langResource.ko.gnb) {
  gnbtags += `<li><a href="${langResource.ko.gnb[x].href}" class="${langResource.ko.gnb[x].cls}">${langResource.ko.gnb[x].nm}</a></li>`
}



$("#gnb").html(gnbtags)

let logintags = "";

for (x in langResource.ko.login) {
  logintags += `<li class="${langResource.ko.login[x].cls}"><a href=${langResource.ko.login[x].href}#">${langResource.ko.login[x].nm}</a></li>`
}

$("#login").prepend(logintags)


// let mychoic = document.getElementById("languageSelector").value;
// updateLanguage(mychoic);

// document.getElementById("languageSelector").addEventListener("change", function () {
//   mychoic = this.value;
//   updateLanguage(mychoic);
// });

// function updateLanguage(lang) {
//   for (let key in langResource[lang]) {

//     const element = document.getElementById(key);

//     if (element) {
//       element.textContent = langResource[lang][key];

//     }
//   }
// }

// 글로벌-----------------------------------------------















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



