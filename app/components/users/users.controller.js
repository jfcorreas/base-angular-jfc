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
        vm.successMessage = '';
        vm.errorMessage = '';
        vm.newUsername = '';
        vm.newPassword = '';
        vm.doLogin = doLogin;
        vm.doLogout = doLogout;
        vm.createUser = createUser;

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

        function createUser(){
          UsersService.createUser(vm.newUser, vm.newPassword, function(response) {
            if (response.success) {
              vm.successMessage = vm.newUser + ' has been created successfully';
              vm.errorMessage = '';
            } else {
              vm.successMessage = '';
              vm.errorMessage = 'Error: ' + vm.newUser + ' user already exists';
            }
          });
        }
    }
})();
