(function() {
    'use strict';

    angular
        .module('baseAngular.users')
        .directive('userLogin', [UserLogin]);

    function UserLogin() {
      var directive = {
          restrict: 'EA',
          templateUrl:   '/app/components/users/userLogin.template.html',
          controller: 'UsersController',
          controllerAs: 'users',
          bindToController: true
      };

      return directive;
    }
})();
