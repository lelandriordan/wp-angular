angular
  .module('app.filters.postContentFilter', [])
  .filter('postContentFilter', postContentFilter);

/**
 * Example filter for manipulating WP REST API HTML response
 */
function postContentFilter($sce) {

  return function(text) {

    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = text;
    var links = htmlObject.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {

      var link = links[i].getAttribute('href');

      // Manipulate the link here
    }

    return $sce.trustAsHtml(htmlObject.outerHTML);
  }

} // postContentFilter()
