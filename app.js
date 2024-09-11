(function() {
'use strict';

  angular.module('nameCalculator',[])
  .controller('nameCalculatorController', function($scope) {
    $scope.name ="";
    $scope.totalValue = 0;
    console.log($scope);

    $scope.displayNumberic = function() {
      var displayTotalValue = calculateStringToNumberic($scope.name);
      $scope.totalValue = displayTotalValue;
    };

    function calculateStringToNumberic(string) {
      var totalStingValue = 0;
      for (var i =0; i< string.length; i++) {
        totalStingValue += string.charCodeAt(i);
      }
      return totalStingValue;
    };
  });
})();
