(function() {
'use strict';

  angular.module('MsgApp',[])
  .controller('msgController', msgController);

      msgController.$inject = ['$scope'];
    function msgController($scope) {
      $scope.name = "Shiyam";
      $scope.stateOfBeing ="waterDrop";

      $scope.sayMsg = function(){
        return "Shiyam likes to draw";
      };

    $scope.feedShiyam = function() {
      $scope.stateOfBeing ="waterDrop";
    };
  }
})();
