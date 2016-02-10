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
        vm.changeLanguage = changeLanguage;

        function changeLanguage(langKey) {
          i18nService.changeLanguage(langKey);
        }
    }
})();
