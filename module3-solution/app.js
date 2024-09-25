(function() {
    'use strict';

  angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };
        return ddo;
    }

    function FoundItemsDirectiveController() {
        var menu = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.searchTerm = "";
        menu.foundItems = "";
        menu.search = function() {
            menu.nothingFound = "";
            if (menu.searchTerm) { // check if empty
                var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm.toLowerCase());
                promise.then(function(foundItems) {
                    if (foundItems.length == 0) {
                        menu.nothingFound = "Nothing found";
                    }
                    menu.foundItems = foundItems;
                })

            } else {
                menu.nothingFound = "Nothing found";
                menu.foundItems = "";
            }
        };
        menu.removeItem = function(itemIndex) {
            menu.foundItems.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });

            return response.then(function(result) {
                var menuData = result.data;
                var foundItems = [];
                menuData.menu_items.forEach(function(item) {
                    if (item.description.indexOf(searchTerm) != -1) {
                        foundItems.push({
                            name: item.name,
                            short_name: item.short_name,
                            description: item.description
                        });
                    }
                });
                return foundItems;
            });
        };
    }

})();
