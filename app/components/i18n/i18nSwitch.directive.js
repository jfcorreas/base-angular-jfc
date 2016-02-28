(function() {
    'use strict';

    angular
        .module('baseAngular.i18n')
        .directive('i18nSwitch', [i18nSwitch]);

    function i18nSwitch() {
      var directive = {
          restrict: 'EA',
          templateUrl:   '/app/components/i18n/i18nSwitch.template.html',
          controller: 'I18nController',
          controllerAs: 'i18n',
          bindToController: true
      };

      return directive;
    }
})();
