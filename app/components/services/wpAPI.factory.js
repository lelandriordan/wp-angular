angular
  .module('app.services.wpAPIFactory', [])
  .factory('wpAPIFactory', wpAPIFactory);

function wpAPIFactory($window, $resource) {
  var endpoints = '/wp-json/wp/v2/:param1/:param2/:param3/:param4/:param5/:param6/:param7/';
  var baseUrl = window.location.protocol + "//" + window.location.host;
  console.log(baseUrl);

  return $resource( baseUrl + endpoints );

  /*return $resource( apiUrl,
    {
      _wp_json_nonce: wpaInfo.nonce
    }
  );*/

}
