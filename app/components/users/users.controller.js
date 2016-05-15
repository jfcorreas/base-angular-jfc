// users.controller.js

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .controller('UsersController', ['UsersService', '$window', '$location', UsersController]);

    function UsersController(UsersService, $window, $location) {
        var vm = this;

        vm.currentUser = UsersService.currentUser();
        vm.loginUsername = '';
        vm.loginPassword = '';
        vm.loginError = false;
        vm.newUsername = '';
        vm.newPassword = '';
        vm.createUserSuccess = false;
        vm.createUserError = false;
        vm.doLogin = doLogin;
        vm.doLogout = doLogout;
        vm.createUser = createUser;
        vm.goToRegisterView = goToRegisterView;

        function doLogin() {
          UsersService.doLogin(vm.loginUsername,vm.loginPassword, function(response){
            if (response.success) {
              vm.currentUser = UsersService.currentUser();
              vm.loginError = false;
            } else {
              vm.loginError = true;
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
          UsersService.createUser(vm.newUsername, vm.newPassword, function(response) {
            if (response.success) {
              vm.createUserSuccess = true;
              vm.createUserError = false;
            } else {
              vm.createUserSuccess = false;
              vm.createUserError = true;
            }
          });
        }

        function goToRegisterView() {
          $location.path('/register');
        }
    }
})();
