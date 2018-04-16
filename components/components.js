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

$.getJSON( "../commons-config.json", function( data ) {
  console.log(data);
});
