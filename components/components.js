// this file should be included to handle the static versions of Components
// does not apply to jsx/React files

function handleMenuToggle() {
  var menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('on');
    document.querySelector('.menu').classList.toggle('show');
    return false;
  });
}

function handleSecondaryHeader() {
  var secondaryHeader = document.querySelector('.site-secondary-header-dropdown a');
  secondaryHeader.addEventListener('click', function() {
    var dropdown = this.parentElement;
    if (this.classList.contains('site-secondary-header-dropdown-arrow') || this.classList.contains('is-selected')) {
      dropdown.classList.toggle('is-open');
    } else {
      this.classList.add('is-selected');
      this.parentNode.childNodes.forEach(function(sibling) {
        sibling.classList ? sibling.classList.remove('is-selected') : null;
      });
      dropdown.classList.toggle('is-open');
      window.location.href = this.href;
    }
    return false;
  });
}

(function handleCopyright() {
  var copyright = document.querySelector('.site-footer-copyright')
  var maxDate = new Date().getFullYear();
  copyright.innerHTML= "&copy; 2016 - " + maxDate + " | Longtail Ad Solutions, Inc. All Rights Reserved. JW Player is a registered trademark."
})();
