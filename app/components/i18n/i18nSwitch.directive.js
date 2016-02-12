(function() {
    'use strict';

    angular
        .module('baseAngular.i18n')
        .directive('i18nSwitch', [i18nSwitch]);

    function i18nSwitch() {
      var directive = {
          restrict: 'EA',
          template:   '' +
            '<label> '+
              '{{"i18nSwitch.label" | translate}}: '+
              '<select ng-model="i18n.currentLocale" '+
                'ng-options="locale as locale.display for locale in i18n.locales track by locale.id" '+
                'ng-change="i18n.changeLocale()">'+
              '</select>'+
            '</label>',
          controller: 'i18nController',
          controllerAs: 'i18n',
          bindToController: true
      };

      return directive;
    }
})();
