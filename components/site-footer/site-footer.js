// handle menu toggling on small viewports
$('.menu-toggle').on('click', function() {
  $(this).toggleClass('on');
  $('.menu').toggleClass('show');
  return false;
});
