(function() {
'use strict';

  angular.module('MsgApp',[])
  .controller('msgController', msgController);

      msgController.$inject = ['$scope', '$filter'];
    function msgController($scope, $filter) {
      $scope.name = "Shiyam";
      $scope.stateOfBeing ="waterDrop";
      $scope.cost =.23;

      $scope.sayMsg = function(){
        var msg = "Shiyam likes to draw";
        var output = $filter('uppercase')(msg);
        return output;
      };

      var output = $filter('lowercase');
    //  var lowered = output("GIVE ME COOKIES NOW!");
    var lowered = $filter('lowercase')("GIVE ME COOKIES NOW!");
      console.log(lowered);

    $scope.feedShiyam = function() {
      $scope.stateOfBeing ="waterDrop";
    };
  }
})();
