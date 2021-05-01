import SmoothScroll from 'smooth-scroll';

let mobile = false;
let startPos = 0;

///////////////////////////////////
// 
// ドキュメント読み込み時の処理 
// 
///////////////////////////////////

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
  //モーダル
  $(function(){
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery : {
        fixedContentPos : false,
        enabled : true, // ギャラリー表示を有効化
        navigateByImgClick : true, // 画像クリックで次画像へ遷移
        preload : [ 0, 1 ] // いっこ前(0)と後(1)を事前読み込み
    },
    });
  });

  //スムーススクロール
  new SmoothScroll('a[href*="#"]', {
    speed: 200,
    header: ".header",
  });


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
  new Swiper(".swiper-container", {
    centeredSlides: true,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    //spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function(index, className) {
      //中の文字を表示
  　　　return '<span class="' + className + '">' + ["クレジットカード", "銀行・消費者ローン", "電気・ガス・水道・ISP","不動産","生保・損保会社","引越・物流","美容・エステ・スポーツクラブ","派遣・人材紹介・採用","鉄道・船舶・航空","コールセンター","自治体",][index] + '</span>';　 }
                 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    },
    onSlideChangeEnd: function (e) {
      e.fixLoop()
    }
  });
}

/**
 * PCのトップスクロールボタンの表示/非表示
 */
/* function switchByWidth() {
  if (window.matchMedia("(min-width:768px)").matches) {
    const pagetop = $("#pagetop");
    if (window.pageYOffset > 200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  }
} */

/**
 * サイドナビ　Current
 */


$(function(){
  var margin = 700,   //ウインドウ上部からどれぐらいの位置で変化させるか
  sectionTop = new Array; //sectionのTop位置格納用

  //(1)各sectionの縦位置を取得
  $('.section').each(function(i) {
      sectionTop[i] = $(this).offset().top;
  });

  //init
  changeNavCurrent(0);

  //スクロールした時の処理
  $(window).on('load scroll', function() {
      scrollY = $(window).scrollTop();

      //(2)各セクションの位置とスクロール位置を比較して、条件にあったらchangeNavCurrentを実行
      for (var i = sectionTop.length - 1 ; i >= 0; i--) {
          if (scrollY > sectionTop[i] - margin) {
                  changeNavCurrent(i);
              break;
          }
      };
  });
  //(3)ナビの処理
  function changeNavCurrent(curNum) {
      if (curNum != current) {
          var current = curNum;
          var curNum2 = curNum + 1;//HTML順序用
          $('.sidenav-list li a').removeClass('current');
          $('.sidenav-list li:nth-child(' + curNum2 +') a').addClass('current');
      }
  };
});


/**
 * スクロール Blur
 */

window.addEventListener("scroll", function () {
  var header = document.querySelector(".fixed-bg");
  var sectionTop = document.getElementById("sectionStoreTop").clientHeight;
  var sectionTopScroll = sectionTop / 2;
  header.classList.toggle("fixed-bg-blur", window.scrollY > sectionTopScroll);
});

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
