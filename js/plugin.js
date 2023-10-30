/*loading window*/
$(window).on("load", function () {
  $(".loading-page").fadeOut(2000);
});
$(document).ready(function () {
  $(".loading-page").removeClass(".loading-page");
  /*header fixed*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 380) {
      $("header").css({ backgroundColor: "rgba(14, 51, 79, 0.9)" });
    } else {
      $("header").css({ backgroundColor: "transparent" });
    }
  });
  /*up icon*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".circle-up").css({ display: "block" });
    } else {
      $(".circle-up").css({ display: "none" });
    }
  });
  $(".circle-up").click(function () {
    $(window).scrollTop(0);
  });
  /* navbar active*/
  $("ul.navbar-nav > li").click(function (e) {
    $("ul.navbar-nav > li").removeClass("active");
    $(this).addClass("active");
  });
  /*navbar collapse*/
  $(".navbar-toggler-icon").on("click", function () {
    $(".navbar .navbar-collapse").addClass("show-navbar");
  });
  $(".close-navbar").on("click", function () {
    $(".navbar .navbar-collapse").removeClass("show-navbar");
  });
  /*first slider*/
  $(".owl-carousel.first-slider-page").owlCarousel({
    loop: true,
    nav: false,
    margin:0,
    autoplay:false,
   autoplayTimeout:4500,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  /* our partenar slider*/
  $(".owl-carousel.our-partenars-img").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
     autoplayHoverPause:false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
  });
  /*testimonials slider*/
  $(".owl-carousel.testimonials").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
     autoplayHoverPause:false,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
