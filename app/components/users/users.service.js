// users.service.js

// [Style Y040] - Services are instantiated with the new keyword, use this for public methods and variables.
//                Since these are so similar to factories, use a factory instead for consistency.
// [Style Y052] - Expose the callable members of the service (its interface) at the top

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .constant('USER_ROLES', {
            admin: 'admin',
            guest: 'guest'
        })
        .constant('AUTH_EVENTS', {
          loginSuccess: 'auth-login-success',
          loginFailed: 'auth-login-failed',
          logoutSuccess: 'auth-logout-success',
          sessionTimeout: 'auth-session-timeout',
          notAuthenticated: 'auth-not-authenticated',
          notAuthorized: 'auth-not-authorized'
        })
        .factory('UsersService', ['USER_ROLES', 'AUTH_EVENTS', UsersService]);

    function UsersService(USER_ROLES, AUTH_EVENTS) {
      var service = {
        getAuthenticatedUser: authenticatedUser
      };
      return service;

      function authenticatedUser(){
        return { username: 'guest', userRoles: [USER_ROLES.guest]};
      }
    }
})();
