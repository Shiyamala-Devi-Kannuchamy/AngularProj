(function() {
'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList =this;
    toBuyList.items = ShoppingListCheckOffService.getItems();

    toBuyList.removeItem = function (index) {
      ShoppingListCheckOffService.boughtItems(index);
    };

    toBuyList.isEmpty = function () {
      try {
        ShoppingListCheckOffService.emptyToBuy();
      } catch (error) {
        toBuyList.errorMessage = error.message;
        console.log("errorMessage", toBuyList.errorMessage, error.message);
      }
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.showBoughtItems();

    boughtList.isEmpty = function () {
      console.log("empty ::" );
      try {
        ShoppingListCheckOffService.emptyAlreadyBought();
      } catch (error) {
        console.log("errorMessage", boughtList.errorMessage, error.message);
        boughtList.errorMessage = error.message;
        console.log("errorMessage", boughtList.errorMessage, error.message);
      }
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var alreadyBought = [];
    var items = [
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
      }
    ];

    service.boughtItems = function (index) {
        alreadyBought.push(items[index]);
        items.splice(index, 1);
    }

    service.showBoughtItems = function () {
      return alreadyBought;
    }

    service.showBuyItems = function () {
      return items;
    }

    service.emptyToBuy = function () {
      console.log("emptyToBuy ::", items.length);
      if (items.length === 0) {
        throw new Error ("Empty !!!.");
       //return true;
      } else {
        return false;
      }
    }

    service.emptyAlreadyBought = function () {
      if (alreadyBought.length === 0) {
//        console.log("inside");
        throw new Error ("Everything is empty!.");
      //return "true";
      } else {
        return false;
      }
    }

    service.getItems = function () {
      return items;
    };
  }

})();
