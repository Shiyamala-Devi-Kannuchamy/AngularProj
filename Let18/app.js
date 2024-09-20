(function() {
'use strict';

  var shoppingList =["vadai", "mittai", "iceCream", "Peanut butter",
    "Milk", "Buttur", "Coconut"];

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController($scope) {
    $scope.shoppingList = shoppingList;

    }

})();
