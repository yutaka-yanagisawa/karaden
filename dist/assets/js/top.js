
///////////////////////////////////
// 
// ウィンドウ スクロール時の処理
// 
///////////////////////////////////
window.addEventListener("scroll", function () {
  var header = document.querySelector("#nav-toggle");
  var logo = document.querySelector(".logo");
  var sectionTop = document.getElementById("sectionTop").clientHeight;
  var sectionTopScroll = sectionTop / 2;
  header.classList.toggle("scroll-nav", window.scrollY > sectionTopScroll);
  logo.classList.toggle("scroll-logo", window.scrollY > sectionTopScroll);
});

