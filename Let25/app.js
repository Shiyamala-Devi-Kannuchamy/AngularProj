(function() {
'use strict';

  angular.module('MenuControllerApp',[])
  .controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  MenuCategoriesController.$inject = ['MenuCategoriesService'];
  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();
    promise.then (function(response) {
      menu.categories = response.data;
    })
    .catch (function(error) {
      console.log("Something went wrong");
    });

    menu.logMenuItems = function(shortName) {
      var promise = MenuCategoriesService.getMenuForCategories(shortName);

      promise.then(function (response) {
        console.log(response.data);
      })
      .catch (function (error) {
        console.log(error);
      })
    };

  }

  MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
  function MenuCategoriesService($http) {
    var service = this;

    service.getMenuCategories = function () {
      var response = $http ({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
      return response;
    };

    function getMenuForCategories(shortName) {
      var response = $http ({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
        params: {
          category: shortName
        }
      });
      return response;
     };
  }

})();
