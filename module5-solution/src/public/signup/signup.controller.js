(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService']
function SignUpController(MenuService) {
    var signUpCtrl = this;
    signUpCtrl.user = [];
    signUpCtrl.message = "";

    signUpCtrl.submit = function () {
        signUpCtrl.completed = true;

        signUpCtrl.content = (MenuService.getSingleMenuItem(
          signUpCtrl.user.favDish, signUpCtrl.user.favDishId))
            .then(function (response) {
              signUpCtrl.item = response;
              if(signUpCtrl.item == null) {
                  signUpCtrl.message = "Cant find the specified dish in the menu";
              }
            })

        MenuService.saveUserInfo(signUpCtrl.user.username,
          signUpCtrl.user.email, signUpCtrl.user.phone,
          signUpCtrl.user.favDish, signUpCtrl.user.favDishId)
    };
 }

})();
