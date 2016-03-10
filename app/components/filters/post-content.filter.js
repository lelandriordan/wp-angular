angular
  .module('app.filters.postContentFilter', [])
  .filter('postContentFilter', postContentFilter);

function postContentFilter($sce) {

  return function(text) {

    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = text;

    var links = htmlObject.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {

      var link = links[i].getAttribute('href');

      links[i].setAttribute('onclick', 'window.open("' + link + '", "_system", "location=no,enableViewportScale=yes")');

      links[i].removeAttribute('href');
    }

    return $sce.trustAsHtml(htmlObject.outerHTML);
  }

} // postContentFilter()
