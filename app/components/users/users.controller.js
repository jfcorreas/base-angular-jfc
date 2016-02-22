// users.controller.js

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .controller('UsersController', ['UsersService', UsersController]);

    function UsersController(UsersService) {
        var vm = this;

        vm.currentUser = UsersService.getAuthenticatedUser();

    }
})();
