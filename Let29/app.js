(function() {
'use strict';

  angular.module('ShoppingListDirectiveApp',[])
  .controller('ShoppingListController', ShoppingListController)
  .factory('ShoppingListFactory', ShoppingListFactory)
  .controller('ShoppingListControllerDirective', ShoppingListControllerDirective)
  .directive('shoppingList', ShoppingListDirective);


  function ShoppingListDirective () {
    var ddo = {
      templateUrl: 'shoppingList.html',
      scope: {
        items: '<',
        title: '@'
      },
      // controller: 'ShoppingListControllerDirective as list',
      controller: ShoppingListControllerDirective,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function ShoppingListControllerDirective() {
    var list = this;

    list.cookiesInList = function () {
      for ( var i =0; i < list.items.length; i++) {
        var name = list.items[i].name;
        if (name.toLowerCase().indexOf("cookies") !== -1) {
          return true;
        }
      }
      return false;
    };

  }

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    var list1 = this;
    var shoppingList = ShoppingListFactory();
    list1.items = shoppingList.getItems();

    var orignTitle = "Shopping List 1";
    list1.title = orignTitle + " ( " + list1.items.length + " items )";

    list1.itemName = "";
    list1.itemQuantity = "";

    list1.addItem = function () {
      shoppingList.addItem(list1.itemName, list1.itemQuantity);
      list1.title = orignTitle + " ( " + list1.items.length + " items)";
    }

    list1.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
      list1.title = orignTitle + " ( " + list1.items.length + " items) ";
    };
  }

  function ShoppingListService(maxItems) {
    var service = this;
    var items = [];

    service.addItem = function (itemName, quantity) {
      if ((maxItems === undefined) ||
          (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    } else {
      throw new Error ("Max Items (" +maxItems +") reached.");
    }
  };

    service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  function ShoppingListFactory() {
    var factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };
    return factory;
  }

})();
