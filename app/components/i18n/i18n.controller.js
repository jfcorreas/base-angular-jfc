// i18n.controller.js

(function() {

    'use strict';

    angular
        .module('baseAngular.i18n')
        .controller('i18nController', ['i18nService', I18nController]);

    function I18nController(i18nService) {
        var vm = this;

        vm.locales = i18nService.getLocales();
        vm.currentLocale = i18nService.getCurrentLocale();
        vm.changeLocale = changeLocale;

        function changeLocale(localeKey) {
          if (localeKey) {
            i18nService.changeLanguage(localeKey);
            vm.currentLocale = i18nService.getCurrentLocale();
          } else {
            i18nService.changeLanguage(vm.currentLocale.id);
          }
        }
    }
})();
