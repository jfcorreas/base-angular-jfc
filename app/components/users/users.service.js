// users.service.js

// [Style Y040] - Services are instantiated with the new keyword, use this for public methods and variables.
//                Since these are so similar to factories, use a factory instead for consistency.
// [Style Y052] - Expose the callable members of the service (its interface) at the top

(function() {

    'use strict';

    angular
        .module('baseAngular.users')
        .constant('USER_ROLES', {
            admin: 'Administrator',
            guest: 'Guest'
        })
        .constant('AUTH_EVENTS', {
          loginSuccess: 'auth-login-success',
          loginFailed: 'auth-login-failed',
          logoutSuccess: 'auth-logout-success',
          sessionTimeout: 'auth-session-timeout',
          notAuthenticated: 'auth-not-authenticated',
          notAuthorized: 'auth-not-authorized'
        })
        .factory('UsersService', ['USER_ROLES', 'AUTH_EVENTS', '_', UsersService]);

    function UsersService(USER_ROLES, AUTH_EVENTS, _) {
      var fakeUsers = {
        'guest': { password:'guest', userRoles: [USER_ROLES.guest]},
        'admin': { password:'admin', userRoles: [USER_ROLES.admin]}
      };
      var currentUser = {};
      var service = {
        getAuthenticatedUser: authenticatedUser,
        doLogin: login
      };
      return service;

      function authenticatedUser(){
        return currentUser;
      }

      function login(username, password, callback) {
        var response = {};
        Object.keys(fakeUsers).some(function(key) {
          if (key === username && fakeUsers[key].password === password) {
            response = { success: true };
            return true;
          }
        });
        if (_.isEmpty(response)) {
          callback({ success: false, message: "Username or password is incorrect" });
        } else {
          callback(response);
        }
      }
    /*  function SetCredentials(username, password) {
          var authdata = Base64.encode(username + ':' + password);

          $rootScope.globals = {
              currentUser: {
                  username: username,
                  authdata: authdata
              }
          };

          $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
          $cookieStore.put('globals', $rootScope.globals);
      }

      function ClearCredentials() {
          $rootScope.globals = {};
          $cookieStore.remove('globals');
          $http.defaults.headers.common.Authorization = 'Basic';
      }*/
    }
})();
