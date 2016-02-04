(function() {
    'use strict';

    angular
        .module('baseAngular')
        .directive('baSetLanguage', [baSetLanguage]);

    function baSetLanguage() {
      var directive = {
          restrict: 'EA',
          template:   '' +
          '<div class="navigation">' +
              '<ul>' +
                '<li><button ng-disabled="main.getCurrentLanguage()==\'es_ES\'" ng-click="main.changeLanguage(\'es_ES\')" translate>{{ \'SPANISH\' }}</button></li>' +
                '<li><button ng-disabled="main.getCurrentLanguage()==\'en_US\'" ng-click="main.changeLanguage(\'en_US\')" translate>{{ \'ENGLISH\' }}</button></li>' +
              '</ul>' +
            '</div>',
          controller: 'MainController',
          controllerAs: 'main',
          bindToController: true
      };

      return directive;
    }
})();
