angular
  .module('app.posts')
  .controller('PostsController', PostsController);

function PostsController($scope, $stateParams, wpAPIFactory) {
  $scope.posts = [];
  $scope.loadPosts = loadPosts();

  $scope.stateParams = $stateParams;

  function loadPosts() {
    var query = {};

    query.param1 = 'posts';

    console.log(query);

    wpAPIFactory
      .query(query)
      .$promise
      .then(function(response) {
        $scope.posts = response;
      })
      .catch(function(errro) {
        console.log(JSON.stringify(error));
      });
  } // loadPosts()

}
