(function() {
'use strict';

  angular.module('CounterApp',[])
  .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];
    function CounterController($scope) {
      $scope.onceCounter = 0;
      $scope.counter = 0;
      $scope.name = "Shiyam";

      $scope.showNumberOfWaters = function () {
        console.log("Number of watchers: ", $scope.$$watchersCount);
      };

      $scope.countOnce = function () {
        $scope.counter =1;
        console.log("Number of watchers: ", $scope.counter);
      };

      $scope.upCounter = function () {
        $scope.counter++;
        console.log("Incremental counter: ", $scope.counter);
      };

      $scope.$watch(function() {
        console.log("Digest loop fired!");
      })

      // $scope.$watch('onceCounter', function(newValue, oldValue) {
      //   console.log("old value ", oldValue);
      //   console.log("new value: ", newValue);
      // });
      //
      // $scope.$watch('counter', function(newValue, oldValue) {
      //   console.log("counter old value ", oldValue);
      //   console.log("counter new value: ", newValue);
      // });

    };

})();
