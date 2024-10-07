(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['MenuService']
function UserInfoController (MenuService) {
    var userInfoCtrl = this;
    userInfoCtrl.user = MenuService.getUserInfo();
    userInfoCtrl.userExist = function () {
        if( userInfoCtrl.user.username === undefined) {
          return false;
        } else {
          return true;
        }
    };

    userInfoCtrl.content = (MenuService.getSingleMenuItem(
        userInfoCtrl.user.favoritedish, userInfoCtrl.user.favoritedishid))
          .then(function (response) {
            userInfoCtrl.item = response
          })
}

})();
