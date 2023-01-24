// ハンバーガー
$(function () {
  $("#js-hamburger").click(function () {
    //toggleClassでclassをつけたり外したりする
    $("body").toggleClass("is-drawerActive");

    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", "true");
      //jQueryでcss操作、アニメーションにはdisplayではなく、visibilityを使う
      $("#js-global-menu").css("visibility", "visible");
      $("#js-global-menu").attr("aria-hidden", "false");
    } else {
      $(this).attr("aria-expanded", "false");
      $("#js-global-menu").css("visibility", "hidden");
      $("#js-global-menu").attr("aria-hidden", "true");
    }
  });
});

// スクロールさせない
$(function () {
  $("a").click(function () {
    $("body").removeClass("is-drawerActive");
    $("#js-global-menu").css("visibility", "hidden");
    $("#js-global-menu").attr("aria-hidden", "true");
    $("#js-hamburger").attr("aria-expanded", "false");
  });
});

// ページトップ
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight < $(this).scrollTop()) {
      $(".pagetop").fadeIn("slow");
    } else {
      $(".pagetop").fadeOut("slow");
    }
  });
});
// 下層のページトップ
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".low__mv").height();
    if (sliderHeight < $(this).scrollTop()) {
      $(".low__pagetop").fadeIn("slow");
    } else {
      $(".low__pagetop").fadeOut("slow");
    }
  });
});

// ヘッダーの背景色スクロールで変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});

// スワイパーページネーション
const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000, // 途切れなくループ
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ローディング

$(function () {
  setTimeout(function () {
    $(".loading p1").fadeIn(1600);
  }, 500); //0.5秒後にロゴをフェードイン!
  setTimeout(function () {
    $(".loading").fadeOut(500);
  }, 5500); //5.5秒後にロゴ含め真っ白背景をフェードアウト！
});
// $(function () {
//   setTimeout(function () {
//     $(".loading p1").fadeOut(00);
//   }, 000); //0.5秒後にロゴをフェードイン!
//   setTimeout(function () {
//     $(".loading p1").fadeIn(1600);
//   }, 3500); //5.5秒後にロゴ含め真っ白背景をフェードアウト！
// });

// AOS
AOS.init({
  offset: 100,
  delay: 200,
  duration: 800,
  easing: "ease-out",
  anchorPlacement: "bottom-top",
  once: false,
});

// 下層スワイパー

var swiper1 = new Swiper(".swiper1", {
  loop: true,
  effect: "coverflow",
  slidesPerView: 5, // or 'auto'
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 6000,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    loopedSlides: 2,
    slidesPerView: "auto",
  },
});
