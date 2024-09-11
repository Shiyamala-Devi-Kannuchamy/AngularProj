(function() {
'use strict';

  angular.module('DIApp',[])
  .controller('DIController', DIController);

  function DIController($scope, $filter) {
    $scope.name ="Shiyam";

    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
      console.log($scope.name);
    };
   }

   var x1 = function () {
     // do something, PLEASE!
     return "Blah!";
   };

   var x2 = x1();
   console.log("x2" , x2);

   function x3(arg) {
     return arg; // Ha-ha! That's all I do!
   }
   console.log("x3",x3);

   var x4 = x3(x1);
   console.log("x4",x4);

   var x5 = x3(x2);
   console.log("x5",x5);

   var x6 = x3(x1());
   console.log("x6",x6);
})();
