var componentPath = './jw-sites-commons/';

function renderComponents(components) {
  var componentDivs;

  if (!window.$) {
    console.log('Couldn\'t load components:', 'Including components requires JQuery.');
    return;
  }

  $('div[data-jw-component]').each(function(el) {
    var container = $(el);
    var componentName = container.attr('data-jw-component');

    container.load(componentPath + componentName + '/index.html')
  });
}

renderComponents();
