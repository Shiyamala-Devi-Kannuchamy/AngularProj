(function() {
'use strict';

  angular.module('MsgApp',[])
  .controller('msgController', msgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

    msgController.$inject = ['$scope', 'lovesFilter'];
    function msgController($scope, lovesFilter) {
      $scope.name = "Shiyam";
      $scope.stateOfBeing ="waterDrop";
      $scope.cost =.23;

      $scope.sayMsg = function(){
        var msg = "Shiyam likes to draw";
        console.log(msg);
        return msg;
      };

      $scope.sayLovesMsg = function(){
        var msg = "Shiyam likes to draw";
        msg = lovesFilter(msg);
        return msg;
      };

    $scope.feedShiyam = function() {
      $scope.stateOfBeing ="waterDrop";
    };
  }

  function LovesFilter() {
      return function(input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
      };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }

})();
