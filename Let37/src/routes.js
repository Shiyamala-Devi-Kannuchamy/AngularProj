(function () {
  'use strict';

  angular.module('ShoppingList')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/shoppinglist/template/home.template.html'
    })

    .state('mainList', {
      url: '/main-list',
      templateUrl: 'src/shoppinglist/template/main-shoppinglist.template.html',
      controller: 'MainShoppingListController as mainList'
    });
  }
  
})();
