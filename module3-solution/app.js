(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('MenuApiPath', "https://coursera-jhu-default-rtdb.firebaseio.com")
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective(){
        var ddo ={
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
        var menu = this;
        menu.searchTerm ="";
        menu.actualAction = "some action";
        menu.found = [];

        menu.getItems = function(){
          menu.nothingFound = "";
            if(menu.found.length !== 0) {
                menu.found.length = 0;
            }
            var promise = MenuSearchService.getMatchedMenuItems();
            promise
            .then(function(response){
                var completeList = [];
                completeList = response.data;
                angular.forEach(completeList, function(element){
                    angular.forEach(element.menu_items, function(item){
                      //  console.log(item);
                        // if(item.description.indexOf(menu.searchTerm) !== -1) {
                        //   console.log("serarch: ", menu.searchTerm);
                        //         menu.found.push(item);
                        //     };
                        if (menu.searchTerm.length === 0) {
                          menu.nothingFound = "Nothing found";
                        } else if (item.description.indexOf(menu.searchTerm) !== -1) {
                          menu.found.push(item);
                        };
                    });
                });
              //  console.log("founs items in the menu:", menu.found);
            })
            .catch(function(error){
                console.log(error)
            })
        }

        menu.removeItem = function(itemIndex){
            menu.actualAction = "remove item: " + itemIndex;
            menu.found.splice(itemIndex, 1);
        };
    };

   MenuSearchService.$inject = ['$http', 'MenuApiPath'];
   function MenuSearchService($http, MenuApiPath){
       var service = this;
       service.foundItems = [];
       service.getMatchedMenuItems = function (){
           //sconsole.log("search items");
           var response = $http({
               method: "GET",
               url: (MenuApiPath + "/menu_items.json")
           });
           return response;;
       }
   }
})();
