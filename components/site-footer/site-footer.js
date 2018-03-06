// handle menu toggling on small viewports

var menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function() {
  this.classList.toggle('on');
  document.querySelector('.menu').classList.toggle('show');
  return false;
});
