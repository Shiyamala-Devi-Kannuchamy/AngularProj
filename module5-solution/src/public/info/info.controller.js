(function() {
  'use strict';

  angular.module('public').controller('InfoController', InfoController);
  InfoController.$inject = ['MenuService', 'ApiPath'];

    var InfoController = function(MenuService, ApiPath) {
        var vm = this;
        vm.apiPath = ApiPath;

        vm.signedUp = false;

        vm.user = MenuService.getUser();
        console.log('User is', vm.user);
        if (angular.equals(vm.user, {})) {
            vm.signedUp = false;
        } else {
            vm.signedUp = true;
        }
    };

})();
