var componentPath = './jw-sites-commons/';
var components = [
  'footer'
];

function renderComponents(components) {
  if (!window.$) {
    console.log('Couldn\'t load components:', 'Including components requires JQuery.');
    return;
  }

  components.forEach(function(name) {
    $('[data-jw-component="' + name + '"]').load(componentPath + name + '/index.html');
  });
}

renderComponents(components);
