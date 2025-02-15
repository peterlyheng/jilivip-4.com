function remSize() {
   var a = window.document.documentElement.clientWidth || window.innerWidth;
   a > 750 && (a = 750), a < 320 && (a = 320), document.documentElement.style.fontSize = a / 7.5 + "px", document.querySelector("body").style.fontSize = "0.3rem", setTimeout(function () {
      init()
   }, 1e3)
}

function sltUrlr() {
   var a = Math.floor(10 * Math.random()),
      b = urls[a];
   !curUrls.includes(b) && curUrls.length < 6 && curUrls.push(b), curUrls.length < 6 ? sltUrlr() : 6 == curUrls.length && renderHtml()
}

function renderHtml() {
   for (var a = "", b = 0; b < curUrls.length; b++) {
      var c = curUrls[b].split("//")[1];
      a += '<div class="item"><div class="line"><div class="ms">' + 10 * (Math.random() + 1.1).toFixed(1) + 'ms</div><div class="txt">' + c + '</div></div><a href="' + curUrls[b] + '" target="_blank"><div class="entre_btn">Entre Agora</div></div></a>'
   }
   $(".linesBox").html(a)
}

function init() {
   new Swiper(".swiper-container_pc1", {
      slidesPerView: "auto",
      spaceBetween: 10,
      direction: "vertical",
      paginationClickable: !1,
      autoplay: 1800,
      centeredSlides: !0,
      autoplayDisableOnInteraction: !1,
      loop: !0,
      loopAdditionalSlides: 3
   }), new Swiper(".swiper-container_pc2", {
      slidesPerView: "auto",
      spaceBetween: 10,
      paginationClickable: !1,
      autoplay: 2e3,
      centeredSlides: !0,
      autoplayDisableOnInteraction: !1,
      loop: !0,
      loopAdditionalSlides: 3
   }), new Swiper(".swiper-container1", {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: ".swiper-pagination1",
      paginationClickable: !1,
      autoplay: 1800,
      centeredSlides: !0,
      autoplayDisableOnInteraction: !1,
      loop: !0,
      loopAdditionalSlides: 3
   }), new Swiper(".swiper-container2", {
      slidesPerView: 1,
      direction: "vertical",
      autoHeight: !0,
      spaceBetween: 10,
      autoplay: 2e3,
      autoHeight: !0,
      autoplayDisableOnInteraction: !1,
      loop: !0,
      roundLengths: !0
   })
}
remSize(), window.onresize = function () {
   remSize()
};
var urls = ["https://jilivipa.com", "https://jilivipb.com", "https://jilivipc.com", "https://jilivipd.com", "https://jilivipe.com", "https://jilivipf.com", "https://jilivipg.com", "https://jiliviph.com", "https://jilivipi.com", "https://jilivipj.com"],
   curUrls = [];
sltUrlr();
var isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
isAppleDevice ? $(".download_link").each(function () {
   $(this).attr("href", "https://9ph22.com")
}) : $(".download_link").each(function () {
   $(this).attr("href", "https://9ph22.com")
});