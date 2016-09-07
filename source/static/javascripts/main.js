$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    function selectric() {
      $('select').selectric({
        maxHeight: 200,
        disableOnMobile: false,

      });
      $('select').on('selectric-change', function(element){
        var thisValue = $(this).val();
        console.log(thisValue);

        if ( thisValue == null ) {
          console.log('null')
        } else {
          var data = $(this).data('selectric');
          $(data.element).parents('.input').removeClass('required error');
        }
      });
    };
    selectric();

    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99");
    };
    inputMask();

    $("#lightgallery").lightGallery({
      selector: '.item a'
    });

    FastClick.attach(document.body);

    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
    $('.login-modal').on('click', function(){
        $('.popup-with-zoom-anim').magnificPopup('close');
        setTimeout(function(){
          $('#second-step').trigger('click');
        }, 300);
    });
    $('#auth-form').on('submit', function(e){
        $('.popup-with-zoom-anim').magnificPopup('close');
        setTimeout(function(){
          $('#third-step').trigger('click');
        }, 300);
        e.preventDefault();
    });

    $('.close-modal').on('click', function(){
      $('.popup-with-zoom-anim').magnificPopup('close');
    });


    //=include modules.js
});