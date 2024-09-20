(function() {
'use strict';

  angular.module('LunchCheck',[])
  .controller('lunchController', lunchController);

  lunchController.$inject = ['$scope'];
  function lunchController($scope, $filter) {
    $scope.itemName ="";
    $scope.message = "";
    $scope.count = 0;

    $scope.lunchCheck = function(){
      $scope.name = $scope.itemName.replace(/\s/g, "");
      var itemCount = $scope.name.split(',');
      for (var i=0; i < itemCount.length; i++ ) {
        if (itemCount[i] !== "") {
          $scope.count++;
        }
      }
      if (itemCount.length === 1 && $scope.name === ""){
        $scope.message = "Please enter data first!";
      } else if ($scope.count <= 3) {
        $scope.message = "Enjoy!";
      } else if ($scope.count > 3){
        $scope.message = "Too Much!";
      }
    };
  }
})();
