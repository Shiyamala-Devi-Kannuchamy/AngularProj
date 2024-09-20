(function() {
'use strict';

  var shoppingList1 =["vadai", "mittai", "iceCream", "Peanut butter",
    "Milk", "Buttur", "Coconut"];

  var shoppingList2 = [
    {
      name: "vadai",
      quantity: 2
    },
    {
      name: "mittai",
      quantity: 129
    },
    {
      name: "iceCream",
      quantity: 20
    },
    {
      name: "Peanut butter",
      quantity: 12
    },
    {
      name: "Milk",
      quantity: 12
    },
    {
      name: "Butter",
      quantity: 12
    },
    {
      name: "coconut",
      quantity: 33
    }
  ]


  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function() {
      var newItem = {
          name: $scope.newItemName,
          quantity: $scope.newItemQanutity
      };

      shoppingList2.push(newItem);
    };
  }

})();
