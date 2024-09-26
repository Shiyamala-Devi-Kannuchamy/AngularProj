(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiPath', "https://coursera-jhu-default-rtdb.firebaseio.com")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective(){
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            found: '<',
            onRemove: '&'
        },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  };

    function FoundItemsDirectiveController(){
      var list = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
      var item = this;
      item.searchTerm ="";
      item.found = [];

      item.getItems = function () {
        item.nothingFound = "";
          if(item.found.length !== 0) {
              item.found.length = 0;
          }
          var promise = MenuSearchService.getMatchedMenuItems();
          promise
          .then(function(response){
              var completeList = [];
              completeList = response.data;
              angular.forEach(completeList, function(element){
                  angular.forEach(element.menu_items, function(searchItem){
                      if (item.searchTerm.length === 0) {
                        item.nothingFound = "Nothing Found";
                      } else if (searchItem.description.indexOf(item.searchTerm) !== -1) {
                        item.found.push(searchItem);
                      };
                  });
              });
          })
          .catch(function(error){
              console.log(error)
          })
      }

      item.removeItem = function(itemIndex){
          item.found.splice(itemIndex, 1);
      };
    };

   MenuSearchService.$inject = ['$http', 'ApiPath'];
   function MenuSearchService($http, ApiPath){
     var service = this;
     service.foundItems = [];
     service.getMatchedMenuItems = function (){
         var response = $http({
             method: "GET",
             url: (ApiPath + "/menu_items.json")
         });
         return response;;
     }
   }
})();
