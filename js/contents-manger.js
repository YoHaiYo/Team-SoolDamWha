/// 함수부
$(document).ready(function(){  

  let makeContents = '';
  for (i in itemTitleContents) {
    let stars = '';
  function printStars(starNum) {
    for (let i = 0; i < starNum; i++) {
      stars += '<span></span>';
    }
    return stars;
  }
    // ★data속성에 .을 붙여서 클래스로 인식되게하기.
    makeContents +=`
    <div class="Imgbox ${itemTitleContents[i].categorydata}">
              <a href="">
                <span><img src="${itemTitleContents[i].img}" alt=""></span>
                <div class="ItemDesc">
                  <div class="productName ">${itemTitleContents[i].productName}</div>
                  <div class="productPrice ">${itemTitleContents[i].productPrice}</div>
                  <div class="starNum d-flex">
                    ${printStars(itemTitleContents[i].starNum)}
                  </div>
                  <p class="desc">${itemTitleContents[i].desc}</p>
                </div>
              </a>
            </div>`}

 document.querySelector('#itemTitle .itemImgWrap_margin').innerHTML = makeContents;

})