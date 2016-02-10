// i18n.service.js

// [Style Y040] - Services are instantiated with the new keyword, use this for public methods and variables.
//                Since these are so similar to factories, use a factory instead for consistency.
// [Style Y052] - Expose the callable members of the service (its interface) at the top

(function() {

    'use strict';

    angular
        .module('baseAngular.i18n')
        .factory('i18nService', ['$translate', 'LOCALES', I18nService]);

    function I18nService($translate, LOCALES) {
      var localesConfig = LOCALES.locales;
      var preferredLocale = LOCALES.preferredLocale;

      changeLanguage(preferredLocale);

      var service = {
        getLocales: locales,
        getCurrentLocale : currentLocale,
        changeLanguage: changeLanguage
      };
      return service;

      function locales() {
        return Object.keys(localesConfig);
      }

      function currentLocale() {
        return $translate.proposedLanguage();
      }

      function changeLanguage(langKey) {
        $translate.use(langKey);
      }
    }
})();
