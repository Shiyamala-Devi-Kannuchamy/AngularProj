 (function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);
var element = [];
var userData = [];

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.getSingleMenuItem = function (category, itemId) {
    return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + itemId + '.json').then(function (response) {
      return response.data;
    });

  };

  service.saveUserInfo = function (username, email, phone, favoritedish, favoritedishid) {
    element.username = username;
    element.email = email;
    element.phone = phone;
    element.favoritedish = favoritedish;
    element.favoritedishid = favoritedishid;
    userData = element;
    console.log(userData)

  };

  service.getUserInfo = function () {
    return userData;
  };
}

})();
