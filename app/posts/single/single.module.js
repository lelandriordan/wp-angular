angular
  .module('app.posts.single', [])
  .controller('SingleController', SingleController);

function SingleController($scope, $timeout, $stateParams) {

  $scope.post = findById($scope.posts, $stateParams.id);

  function findById(array, id) {
    for(var i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        return array[i];
      } else {
        console.log('No Matching Post Found');
        console.log(array);
      }
    }
  }

}
