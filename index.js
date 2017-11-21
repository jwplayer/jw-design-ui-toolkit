function renderComponents(components) {
  var componentDivs;

  if (!window.$) {
    console.log('Couldn\'t load components:', 'Including components requires JQuery.');
    return;
  }

  $('div[data-jw-component]').each(function(index, el) {
    var container = $(el);
    var componentName = container.attr('data-jw-component');

    container.load('/components/' + componentName + '/index.html')
  });
}

renderComponents();
