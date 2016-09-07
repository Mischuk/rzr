function equalImage() {
  var mitem = $('.m_item .image');
  var W = mitem.width();
  mitem.height(W-(W-((W/4)*3)));
};

$(window).load(equalImage);
$(window).resize(equalImage);

function equalsImage() {
  var mitem = $('.m_gallery .group .item');
  var W = mitem.width();
  mitem.height(W-(W-((W/4)*3)));
};

$(window).load(equalsImage);
$(window).resize(equalsImage);


function equalszImage() {
  var mitem = $('.m_gallery .list-video .item a .image');
  var W = mitem.width();
  mitem.height(W-(W-((W/4)*3)));
};

$(window).load(equalszImage);
$(window).resize(equalszImage);
