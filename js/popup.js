 // 하루동안 안보기
 $(document).ready(function () {
  cookiedata = document.cookie;
  if (cookiedata.indexOf("close=Y") < 0) {
    $("#popup").show();
  } else {
    $("#popup").hide();
  }
});

function exit() {
  if ($("input[name=layer-close]").is(":checked") == true) {
    setCookie("close", "Y", 1);
  }

  $("#popup").hide();
}

function exit2() {
  $("#popup").hide();
  setCookie("close", "Y", 1);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); //시간설정 
  var expires = "expires=" + d.toUTCString();
  var temp = cname + "=" + cvalue + "; " + expires;
  document.cookie = temp;
}