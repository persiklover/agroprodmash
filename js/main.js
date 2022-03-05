$(function () {

  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 5 + 'px'
    }, 500);
  });

  // Burger-menu
  $('.js-menu-btn').click(function () {
    $("body").toggleClass("scroll-disabled");
    $(this).toggleClass('menu-btn--active');
    $(".nav")
      .toggleClass("opened")
      .css("transition", "transform .3s ease-in-out");
  });

  $(".nav").find("a").click(function() {
    $(".nav").removeClass("opened");
    $("body").removeClass("scroll-disabled");
    $(".js-menu-btn").removeClass('menu-btn--active');
  });
  
  // Toggle language
  $('.js-lang-btn').click(function () {
    $(this)
      .addClass("active")
      .parent().siblings().find(".js-lang-btn").removeClass("active");
    var lang = $(this).attr("data-lang");
    // Insert logic here...
  });

  // Open popup
  function togglePopup() {
    $("body").toggleClass("scroll-disabled");
    $(".modal").toggleClass("active");
  }

  $(".js-register-btn").click(togglePopup);

  // Close popup
  $(".modal").find(".modal__content").click(function(e) {
    if ($(e.target).is($(this))) {
      togglePopup();
    }
  });

  var $video = $(".video");
  var thumbnail = $video.find(".video__embed");
  var link = $video.find(".video__link");
  var id = link.attr("href").slice(link.attr("href").lastIndexOf("/") + 1);
  var play = $video.find(".video__play");

  $video.click(function() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("src", "https://www.youtube.com/embed/"+id+"?rel=0&showinfo=0&autoplay=1");
    iframe.classList.add("video__embed");

    link.remove();
    play.remove();
    $video.append(iframe);
  });

  link.removeAttr("href");
  link.removeAttr("target");
  $video.addClass("video--enabled");

});