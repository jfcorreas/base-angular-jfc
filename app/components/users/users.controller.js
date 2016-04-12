// users.controller.js

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .controller('UsersController', ['UsersService', UsersController]);

    function UsersController(UsersService) {
        var vm = this;

        vm.currentUser = UsersService.currentUser();
        vm.loginUsername = '';
        vm.loginPassword = '';
        vm.doLogin = doLogin;

        function doLogin() {
          UsersService.doLogin(vm.loginUsername,vm.loginPassword, function(response){
            if (response.success) {
              vm.currentUser = UsersService.currentUser();
            }
          });
        }

    }
})();
