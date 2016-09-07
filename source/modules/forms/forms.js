function stepsForm() {
  var $next = $('.control-next');
  var $prev = $('.control-prev');
  var $form = $('.steps-form');

  $form.find('input').on('blur', function(){
    if ( $(this).val() == "" ) {
      $(this).parent().addClass('required');
    } else {
      $(this).parent().removeClass('required error');
    }
  });

  $form.find('input').on('focus', function(){
    $(this).parent().removeClass('error');
  });

  $prev.on('click', function(){
    var eqGroups = $form.find('.form-group').length;

    $form.find('.form-group.current').removeClass('current').prev().addClass('current');
    var currentGroup = $form.find('.form-group.current').index();
    console.log(currentGroup);
    if ( currentGroup > 1 && currentGroup < 4 )  {
      $('.control-next').removeClass('hidden');
      $('.submit').addClass('hidden');
    } else if ( currentGroup == 4 ) {
      $('.control-next').addClass('hidden');
      $('.submit').removeClass('hidden');
    }

    if ( currentGroup > 1 )  {
      $('.control-prev').removeClass('hidden');
    } else if ( currentGroup == 1 ) {
      $('.control-prev').addClass('hidden');
    }
  });

  $next.on('click', function(){
    var required = $form.find('.form-group.current .input.required').length;
    var eqGroups = $form.find('.form-group').length;

    if ( required == 0 ) {
      var currentGroup = $form.find('.form-group.current').next().index();
      $form.find('.form-group.current').removeClass('current').next().addClass('current');
      $('.required').removeClass('error');
      if ( currentGroup > 1 && currentGroup < 4 )  {
        $('.control-next').removeClass('hidden');
        $('.submit').addClass('hidden');
      } else if ( currentGroup == 4 ) {
        $('.control-next').addClass('hidden');
        $('.submit').removeClass('hidden');
      }

      if ( currentGroup > 1 )  {
        $('.control-prev').removeClass('hidden');
      } else if ( currentGroup == 1 ) {
        $('.control-prev').addClass('hidden');
      }
      return false;
    } else {
      $form.find('.form-group.current').find('.input').each(function(){
        if ( $(this).hasClass('required') ){
          $(this).addClass('error');
        }
      });
      return false;
    }
  });
};
stepsForm();