$('.site-secondary-header-dropdown a').on('click', function() {
  var $this = $(this),
    $dropdown = $this.parent();
  if ($this.hasClass('site-secondary-header-dropdown-arrow')
      || $this.hasClass('is-selected')) {
    $dropdown.toggleClass('is-open');
  } else {
    $this.addClass('is-selected')
      .siblings()
      .removeClass('is-selected');
    $dropdown.toggleClass('is-open');
    window.location.href($this.attr('href'));
  }
  return false;
});
