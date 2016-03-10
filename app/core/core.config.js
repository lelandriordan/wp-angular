angular
  .module('app')
  .config(config);

function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/posts');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      template: '<ui-view></ui-view>',
      controller: 'CoreController'
    })

    .state('app.posts', {
      url: '/posts',
      templateUrl: '/wp-content/themes/wp-angular/app/posts/posts.html',
      controller: 'PostsController'
    })

    .state('app.posts.single', {
      url: '/:id',
      templateUrl: '/wp-content/themes/wp-angular/app/posts/single/single.html',
      controller: 'SingleController'
    })

} // end of config()
