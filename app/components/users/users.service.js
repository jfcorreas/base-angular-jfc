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

      var authentication = {
        isLogged : false,
        username : ''
      };

      var fakeUsers = {
        'guest': { password:'guest', userRoles: [USER_ROLES.guest]},
        'admin': { password:'admin', userRoles: [USER_ROLES.admin]}
      };

      var service = {
        currentUser: authenticatedUser,
        doLogin: login,
        doLogout: logout,
        getRegisteredUsers: getUsersList,
        registerUser: addNewUser
      };
      return service;

      function authenticatedUser(){
        return authentication;
      }

      function login(username, password, callback) {
        if (fakeValidCredentials(username, password)) {
          authentication.isLogged = true;
          authentication.username = username;
          callback({ success: true });
        } else {
          callback({ success: false, message: "Username or password is incorrect" });
        }
      }

      function logout(callback) {
        if (fakeCleanCredentials()) {
          callback({ success: true });
        } else {
          callback({ success: false, message: "Error trying to logout" });
        }
      }

      function fakeValidCredentials(username, password) {

        var areValidCredentials = false;
        Object.keys(fakeUsers).some(function(key) {
          if (key === username) {
            if (fakeUsers[key].password === password) {
              areValidCredentials = true;
            }
            return true;
          }
        });
        return areValidCredentials;
      }

      function fakeCleanCredentials() {
        // TODO send logout signal to the server
        authentication = {
          isLogged : false,
          username : ''
        };
        return true;
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

      function getUsersList(callback) {
        var usersArray = [];
        Object.keys(fakeUsers).every(function(key) {
          usersArray.push(key);
          return true;
        });
        callback({success: true, usersList: usersArray});
      }

      function addNewUser(username, password, callback) {
        fakeUsers[username] = { password: password, userRoles: [USER_ROLES.guest]};
        callback({success: true});
      }
    }
})();
