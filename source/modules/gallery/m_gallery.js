function equalItem() {
  var item = $('.list-images#lightgallery .item');
  var W = item.width();
  item.height(W);
};

$(window).load(equalItem);
$(window).resize(equalItem);