// i18n.controller.js

(function() {
  /*jshint validthis: true */

    'use strict';

    angular
        .module('baseAngular.i18n')
        .controller('i18nController', ['$translate', i18nController]);

    function i18nController($translate) {
        var vm = this;

        vm.changeLanguage = changeLanguage;
        vm.getCurrentLanguage = getCurrentLanguage;

        function changeLanguage(langKey) {
          $translate.use(langKey);
        }

        function getCurrentLanguage() {
          return $translate.proposedLanguage();
        }
    }
})();
