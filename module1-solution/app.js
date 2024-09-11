(function() {
'use strict';

  angular.module('LunchCheck',[])
  .controller('lunchController', lunchController);

  lunchController.$inject = ['$scope'];
  function lunchController($scope, $filter) {
    $scope.itemName ="";
    $scope.message = "";

    $scope.lunchCheck = function(){
      var itemCount = $scope.itemName.split(',');
      if (itemCount.length == 0){
        $scope.message = "Please enter data first!";
      } else if (itemCount.length <= 3) {
        $scope.message = "Enjoy!";
      } else if (itemCount.length > 3){
        $scope.message = "Too Much!";
      }
    };
  }
})();
