(function() {
    'use strict';

    angular
        .module('baseAngular.i18n')
        .directive('i18nSwitch', [i18nSwitch]);

    function i18nSwitch() {
      var directive = {
          restrict: 'EA',
          template:   '' +
            '<select ng-model="i18n.currentLocale" '+
               'ng-options="localesDisplayName for localesDisplayName in i18n.locales" '+
               'ng-selected="i18n.currentLocale" '+
               'ng-change="i18n.changeLanguage(i18n.currentLocale)">'+
            '</select>',
      /*      '<select>' +
                '<option ng-disabled="i18n.getCurrentLanguage()==\'es_ES\'" ng-click="i18n.changeLanguage(\'es_ES\')" translate>{{ \'SPANISH\' }}</option>' +
                '<option ng-disabled="i18n.getCurrentLanguage()==\'en_US\'" ng-click="i18n.changeLanguage(\'en_US\')" translate>{{ \'ENGLISH\' }}</option>' +
            '</select>',*/
          controller: 'i18nController',
          controllerAs: 'i18n',
          bindToController: true
      };

      return directive;
    }
})();
