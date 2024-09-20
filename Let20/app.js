(function() {
'use strict';

  angular.module('ShoppingApp',[])
  .controller('ShoppingListAddController', ShoppingListAddController)
  .controller('ShoppingShowListController', ShoppingShowListController)
  .service('ShoppingListService', ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService'];
  function ShoppingListAddController(ShoppingListService) {
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {
      console.log("hi");
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity)
    }
  }

  ShoppingShowListController.$inject = ['ShoppingListService'];
  function ShoppingShowListController(ShoppingListService) {
    var showList = this;

    showList.items = ShoppingListService.getItems();
    console.log(showList.items);

    showList.removeItem = function (index) {
      ShoppingListService.removeItem(index);
    };
  }

  function ShoppingListService() {
    var service = this;
    var items = [];

    service.addItem = function (itemName, quantity) {
      console.log("hello");
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
      console.log(items);
    };

    service.removeItem = function (index) {
        items.splice(index, 1);
    };

    service.getItems = function () {
      return items;

    };
  }

})();
