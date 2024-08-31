$(document).ready(function() {

   function secTop() {
      var sec0H = $('#main').offset().top - $(window).height() / 5;
      var sec1H = $('#sec1').offset().top - $(window).height() / 5; 
      var sec2H = $('#sec2').offset().top - $(window).height() / 5; 
      var sec3H = $('#sec3').offset().top - $(window).height() / 5;
      var sec4H = $('#sec4').offset().top - $(window).height() / 5;
      return [sec0H, sec1H, sec2H, sec3H, sec4H];
  };
  function hasScrolled() {
      var cp = $(window).scrollTop();
      var secTops = secTop();
      if (cp < secTops[1]) {
          var i = 0;
      } else if (cp >= secTops[1] && cp < secTops[2]){ 
          var i = 1;
      } else if (cp >= secTops[2] && cp < secTops[3]){
          var i = 2;
      } else if (cp >= secTops[3] && cp < secTops[4]){
          var i = 3;
      } else if (cp >= secTops[4]){
          var i = 4;
      }
      switch (i) {
          case 0 :
              lnbLi(i);
              break;

          case 1 : 
              lnbLi(i);
              break;

          case 2 :
              lnbLi(i);
              break;

          case 3 :
              lnbLi(i);
              break;

          case 4 :
              lnbLi(i);
              break;
      }
  }

  window.fnGotoSec = function(e){
   var selTop = $(e).offset().top;
   $('html, body').animate({scrollTop: selTop }, 50, 'linear');
}

$(window).scroll(function() {
   hasScrolled();
});

function lnbLi(e){ // lnb li on/off
   $('.lnb li').removeClass('on');
   $('.event'+e).addClass('on');
}

$(window).on('resize', function() {
    winWidth = window.innerWidth;
    lnbW = $('.lnb').outerWidth(true);
    hasScrolled();
    setNav();

    // 슬라이드
    $('.contents-wrap').slick('resize');
    $('.events-wrap').slick('resize');
});

let winWidth = window.innerWidth;

// header
window.fnToggleNav = function() {
    // 1024보다크고 on있을때
    if(winWidth > 1024 && $('#header').hasClass('on') == true){
        $('#header').stop().animate({'right':'-220px'});
        $('#header').removeClass('on');
        $('#header').css({'left':'auto'});

    // 1024보다크고 on없을때
    }else if( winWidth > 1024 && $('#header').hasClass('') == true) {
        $('#header').stop().animate({'right':'0'});
        $('#header').css({'left':'auto'});
        $('#header').addClass('on');
    }
  
    // 1024보다작고 on없을때
    else if( winWidth <= 1024 && $('#header').hasClass('') == true) {
        $('#header').stop().animate({'left':'0'});
        $('#header').css({'right:':'auto'});
        $('#header').addClass('on');
    }

    // 1024보다작고 on있을때
    else if( winWidth <= 1024 && $('#header').hasClass('on') == true) {
        $('#header').stop().animate({'left':'-190px'});
        $('#header').css({'right:':'auto'});
        $('#header').removeClass('on');
    }
}

// 화면너비 조절
window.setNav = function() {
    if(winWidth > 1024) {
        $('#header').css({'right':'0'});
        $('#header').css({'left':'auto'});
        $('#header').addClass('on');

    } else {
        $('#header').css({'left':'-190px'});
        $('#header').css({'right':'auto'});
        $('#header').removeClass('on');
    }
}


// sec2 슬라이드
$('.contents-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 1024,
            settings: 'unslick'
        }
    ]
});

// sec2 슬라이드
$('.events-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 1024,
            settings: 'unslick'
        }
    ]
});

// 팝업창
$(".milestone").click(function(){
    if ($(window).width() <= 1024) { // 화면 크기 체크
        $(this).find(".shadow").css("display", "block");
        $(".popup").css("display", "none");
        $(this).find(".popup").css("display", "block");
        $("body").css("overflow", "hidden"); // 스크롤 막기
    }
});

$("#sec3 .popup .close-popup, #sec3 .shadow").click(function(event){
    event.stopPropagation(); // 이벤트 전파 방지
    
    $(this).closest(".popup").css("display", "none"); // 현재 팝업만 닫기
    $(".shadow").css("display", "none");
    $(".popup").css("display", "none");
    $("body").css("overflow", "auto"); // 스크롤 복구

});
  
})














