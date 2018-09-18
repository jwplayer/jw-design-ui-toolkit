// handle menu toggling on small viewports

var menuToggle = document.querySelector('.menu-toggle');
var copyright = document.querySelector('.site-footer-copyright')
var maxDate = new Date().getFullYear();

menuToggle.addEventListener('click', function() {
  this.classList.toggle('on');
  document.querySelector('.menu').classList.toggle('show');
  return false;
});

copyright.innerHTML= "&copy; 2016 - " + maxDate + " | Longtail Ad Solutions, Inc. All Rights Reserved. JW Player is a registered trademark."
