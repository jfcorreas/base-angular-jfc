(function() {
    'use strict';

    angular
        .module('baseAngular.i18n')
        .directive('i18nSwitch', [i18nSwitch]);

    function i18nSwitch() {
      var directive = {
          restrict: 'EA',
          template:   '' +
          '<div class="navigation">' +
              '<ul>' +
                '<li><button ng-disabled="i18n.getCurrentLanguage()==\'es_ES\'" ng-click="i18n.changeLanguage(\'es_ES\')" translate>{{ \'SPANISH\' }}</button></li>' +
                '<li><button ng-disabled="i18n.getCurrentLanguage()==\'en_US\'" ng-click="i18n.changeLanguage(\'en_US\')" translate>{{ \'ENGLISH\' }}</button></li>' +
              '</ul>' +
            '</div>',
          controller: 'i18nController',
          controllerAs: 'i18n',
          bindToController: true
      };

      return directive;
    }
})();
