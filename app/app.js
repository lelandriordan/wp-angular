angular
  .module('app', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'app.posts',
    'app.services.wpAPIFactory',
    'app.filters.postContentFilter'
  ]);
