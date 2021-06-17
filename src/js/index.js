/* import smoothScroll from "smooth-scroll"; */
import picturefill from "picturefill";
let mobile = false;
let startPos = 0;

///////////////////////////////////
//
// ドキュメント読み込み時の処理
//
///////////////////////////////////
function switchByWidth() {
  if (window.matchMedia("(max-width: 856px)").matches) {
    //スマホ処理
    //メニュー開閉
    document.getElementById("nav-toggle").addEventListener("click", () => {
      document.body.classList.toggle("open");
    });
    document.getElementById("global-nav-close-btn").addEventListener("click", () => {
      document.body.classList.remove("open");
    });
    $(".global-nav-list-item--child").click(function () {
      document.body.classList.remove("open");
  });
  } else if (window.matchMedia("(min-width:857px)").matches) {
    //PC処理
    
  }
}

$(function () {
  picturefill();
  //Mobile判定
  const ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    ua.indexOf("iPad") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    mobile = true;
  }
  else{
    $(function () {
      var $win = $(window),
        $cloneNav = $("header")
          .clone()
          .addClass("header-fixed")
          .appendTo("body"),
        showClass = "is-show";
      $win.on("load scroll", function () {
        var value = $(this).scrollTop();
        var sectionTop = document.getElementById("mainvisual").clientHeight;
        if (value > sectionTop) {
          $cloneNav.addClass(showClass);
        } else {
          $cloneNav.removeClass(showClass);
        }
      });
    });
  }

  //アコーディオン  
  $(".question").click(function(){
    $(this).next().slideToggle();
    $(this).next().toggleClass("active");
    $(this).toggleClass("active");
  });

  //スムーススクロール
  $('.scene-example-link-nav-block a[href^="#"]').click(function() {
    let speed = 400; 
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
      scrollTop: position - 100
    }, speed, 'swing');
    return false;
  });

  $('.pagetop a[href^="#"]').click(function() {
    let speed = 400; 
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
      scrollTop: position - 100
    }, speed, 'swing');
    return false;
  });
});

///////////////////////////////////
//
// ウィンドウ ロード時の処理
//
///////////////////////////////////
$(window).on("load", function () {
  playMv();
  if ($(".swiper-container").length) intialSwiper();
  switchByWidth();
});

///////////////////////////////////
//
// ウィンドウ リサイズ時の処理
//
///////////////////////////////////
$(window).on("resize", function () {
  switchByWidth();
});

///////////////////////////////////
//
// ウィンドウ スクロール時の処理
//
///////////////////////////////////

/**
 * トップスクロールボタンの表示/非表示
 */

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".pagetop").fadeIn();
  } else {
    $(".pagetop").fadeOut();
  }
});

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
    effect: "fade", //フェードのエフェクト
    fadeEffect: {
      crossFade: true,
    },
    /* fadeEffect: {
      crossFade: true
    }, */
    pagination: {
      el: ".swiper-pagination-scene",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        //中の文字を表示
        return (
          '<span class="' +
          className +
          '">' +
          [
            "クレジットカード",
            "銀行・消費者ローン",
            "電気・ガス・水道・ISP",
            "不動産",
            "生保・損保会社",
            "引越・物流",
            "美容・エステ・スポーツクラブ",
            "派遣・人材紹介・採用",
            "鉄道・船舶・航空",
            "コールセンター",
            "自治体",
          ][index] +
          "</span>"
        );
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-scene",
      prevEl: ".swiper-button-prev-scene",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: "fade", //フェードのエフェクト
        fadeEffect: {
          crossFade: true,
        },
      },
    },
    onSlideChangeEnd: function (e) {
      e.fixLoop();
    },
  });
  new Swiper(".swiper-container-example", {
    centeredSlides: true,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 64,
    effect: "fade", //フェードのエフェクト
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination-example",
      type: "bullets",
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
        effect: "fade", //フェードのエフェクト
        fadeEffect: {
          crossFade: true,
        },
      },
    },
    onSlideChangeEnd: function (e) {
      e.fixLoop();
    },
  });
}

/**
 * mv
 */

function playMv() {
  display1()
    .then(cursol)
    .then(none)
    .then(display2);
}

function display1() {
  var d = new $.Deferred();
  $(".mainvisual-img-smartphone-display01")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      {
        duration: 500,
        easing: "linear",
        complete: function () {
          d.resolve();
          console.log("display1");
        },
      }
    );
  return d.promise();
}

function cursol() {
  var d = new $.Deferred();
  $(".mainvisual-img-smartphone-cursol")
    .delay(500)
    .animate(
      {
        opacity: "1",
      },
      {
        duration: 500,
        easing: "linear",
        complete: function () {
          d.resolve();
          $(".mainvisual-img-smartphone-ripple").addClass("active");
        },
      }
    );
  return d.promise();
}

function display2() {
  var d = new $.Deferred();
  $(".mainvisual-img-smartphone-display02")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      {
        duration: 500,
        easing: "linear",
        complete: function () {
          d.resolve();
        },
      }
    );
  return d.promise();
}

function none() {
  var d = new $.Deferred();
  $(".mainvisual-img-smartphone-cursol")
    .delay(1000)
    .animate(
      {
        opacity: "0",
      },
      {
        duration: 500,
        easing: "linear",
        complete: function () {
          d.resolve();
        },
      }
    );
  return d.promise();
}

