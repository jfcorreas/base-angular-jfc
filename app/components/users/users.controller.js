// users.controller.js

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .controller('UsersController', ['UsersService', UsersController]);

    function UsersController(UsersService) {
        var vm = this;

        vm.currentUser = UsersService.getAuthenticatedUser();
        vm.username = '';
        vm.password = '';
        vm.doLogin = doLogin;

        function doLogin() {
          console.log(vm.username + ' logged in');
        }

    }
})();
