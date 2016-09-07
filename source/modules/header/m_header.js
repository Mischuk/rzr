function mobileMenu() {
  $('.mobile-menu-trigger').on('click', function(){
    $(this).toggleClass('open');
    $('.background-layout').toggleClass('show');
    $('.menu').toggleClass('open');
  });

  $('.background-layout').on('click', function(){
    $('.mobile-menu-trigger, .menu').removeClass('open');
    $(this).removeClass('show');
  });
};
mobileMenu();