(function () {
  'use strict';

  angular.module('ShoppingList')
  .component('shoppingList', {
    templateUrl: 'src/shoppinglist/template/shoppinglist.template.html',
    bindings:{
      items: '<'
    }
  });

}) ();
