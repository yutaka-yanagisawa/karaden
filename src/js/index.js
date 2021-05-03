import SmoothScroll from 'smooth-scroll';

let mobile = false;
let startPos = 0;

///////////////////////////////////
// 
// ドキュメント読み込み時の処理 
// 
///////////////////////////////////
function switchByWidth(){
  if (window.matchMedia('(max-width: 767px)').matches) {
      //スマホ処理
  } else if (window.matchMedia('(min-width:768px)').matches) {
      //PC処理
    $(function() {
      var $win = $(window),
          $cloneNav = $('header').clone().addClass('header-fixed').appendTo('body'),
          showClass = 'is-show';
    
      $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        var sectionTop = document.getElementById("mainvisual").clientHeight;
        if ( value > sectionTop ) {
          $cloneNav.addClass(showClass);
        } else {
          $cloneNav.removeClass(showClass);
        }
      });
    });
  }
}

$(function () {
  //Mobile判定
  const ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    ua.indexOf("iPad") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    mobile = true;
    $(function(){
      $('.gloval-nav-list-item .target').click(function(){
        const activeClass = "active";
        $(this).toggleClass(activeClass);
        $(this).next().slideToggle(250);
        $('.gloval-nav-list-item .target').not($(this)).next('.gloval-nav-list--child').slideUp();
        $('.gloval-nav-list-item .target').not($(this)).removeClass("active");
      });
      $('#gloval-nav-close-btn').click(function(){
        $('.gloval-nav-list--child').slideUp();
        $('.gloval-nav-list-item .target').removeClass("active");
      });
      
    });
  }
  
  //ハンバーガメニュー　アコーディオン
  /* $(".gloval-nav-list-item .target").on("click", function () {
    const activeClass = "active";
    $(this).toggleClass(activeClass);
    $(this).next().slideToggle(250);
  }); */

  //メニュー開閉
   document.getElementById("nav-toggle").addEventListener("click", () => {
     document.body.classList.toggle("open");
   });
   document.getElementById("gloval-nav-close-btn").addEventListener("click", () => {
    document.body.classList.remove("open");
   });
  $('.gloval-nav-list-item--child').click(function(){
    document.body.classList.remove("open");
   });
});
//スムーススクロール
new SmoothScroll('a[href*="#"]', {
  speed: 200,
  header: ".header",
});
///////////////////////////////////
// 
// ウィンドウ ロード時の処理
// 
///////////////////////////////////
$(window).on('load', function () {
  if ($('.swiper-container').length) intialSwiper();
  switchByWidth();
  setTimeout(function () {
  }, 500);
});

///////////////////////////////////
// 
// ウィンドウ リサイズ時の処理
// 
///////////////////////////////////
$(window).on('resize', function () {
  switchByWidth();
})

///////////////////////////////////
// 
// ウィンドウ スクロール時の処理
// 
///////////////////////////////////

///////////////////////////////////
// 
// 関数
// 
///////////////////////////////////


/**
 *  Swiperの初期化
 */
function intialSwiper() {
  new Swiper(".swiper-container-scene", {
    centeredSlides: true,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination-scene',
      type: 'bullets',
      clickable: true,
      renderBullet: function(index, className) {
      //中の文字を表示
  　　　return '<span class="' + className + '">' + ["クレジットカード", "銀行・消費者ローン", "電気・ガス・水道・ISP","不動産","生保・損保会社","引越・物流","美容・エステ・スポーツクラブ","派遣・人材紹介・採用","鉄道・船舶・航空","コールセンター","自治体",][index] + '</span>';　 }
                 },
    navigation: {
      nextEl: ".swiper-button-next-scene",
      prevEl: ".swiper-button-prev-scene",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    },
    onSlideChangeEnd: function (e) {
      e.fixLoop()
    }
  });
  new Swiper(".swiper-container-example", {
    centeredSlides: true,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 64,
    pagination: {
      el: '.swiper-pagination-example',
      type: 'bullets',
      clickable: true,
                 },
    navigation: {
      nextEl: ".swiper-button-next-example",
      prevEl: ".swiper-button-prev-example",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 40,
      }
    },
    onSlideChangeEnd: function (e) {
      e.fixLoop()
    }
  });
}

/**
 * トップスクロールボタンの表示/非表示
 */
 $(function() {
   $(window).on("scroll", function() {
     if ($(this).scrollTop() > 100) {
       $(".pagetop").fadeIn();
     } else {
       $(".pagetop").fadeOut();
     }
   });
 });

/**
 * ヘッダースクロール 固定
 */



//FOUT対応
window.WebFontConfig = {
  google: { families: ['urw-din-condensed'] },
  active: function() {
    sessionStorage.fonts = true;
  }
};

$(window).on('load', function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})

jQuery(function($) { 
  $(".question").on("click", function() {
    $(this).next().slideToggle();
    $(this).next().toggleClass("active");
    $(this).toggleClass("active");
  });

});
