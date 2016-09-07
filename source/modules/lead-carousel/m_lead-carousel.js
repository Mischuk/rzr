function leadCarouselHeight() {
    var WH = $(window).height();
    var HEADER = $('.m_header').height();
    $('.m_lead-carousel').height(WH - HEADER);
};
leadCarouselHeight();

function leadCarousel() {
  $('.lead-carousel').slick({
    dots: false,
    arrows: true,
    fade: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'ease-out',
    pauseOnHover: false
  });
};
leadCarousel();
