// users.controller.js

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .controller('UsersController', ['UsersService', '$window', UsersController]);

    function UsersController(UsersService, $window) {
        var vm = this;

        vm.currentUser = UsersService.currentUser();
        vm.loginUsername = '';
        vm.loginPassword = '';
        vm.errorMessage = '';
        vm.doLogin = doLogin;
        vm.doLogout = doLogout;

        function doLogin() {
          UsersService.doLogin(vm.loginUsername,vm.loginPassword, function(response){
            if (response.success) {
              vm.currentUser = UsersService.currentUser();
              vm.errorMessage = '';
            } else {
              vm.errorMessage = response.message;
            }
          });
        }

        function doLogout() {
          UsersService.doLogout(function(response){
            vm.currentUser = UsersService.currentUser();
            vm.loginUsername = '';
            vm.loginPassword = '';
          });
        }
    }
})();
