'use strict';

/**
 * @ngdoc overview
 * @name i18n
 * @description
 * # i18n
 *
 * Internationalization module of the application
 */

angular
  .module('baseAngular.i18n', [
    'baseAngular.core',
    'pascalprecht.translate',
    'tmh.dynamicLocale'
  ])
  .constant('LOCALES', {
    'locales': {
        'es_ES': 'Español',
        'en_US': 'English'
    },
    'preferredLocale': 'es_ES'
  })
  .config(['$translateProvider', 'tmhDynamicLocaleProvider', 'LOCALES',
    function ($translateProvider, tmhDynamicLocaleProvider, LOCALES) {
      $translateProvider.useStaticFilesLoader({
        prefix: 'app/resources/locale-',
        suffix: '.json'
      })
        .preferredLanguage(LOCALES.preferredLocale)
        .useSanitizeValueStrategy('sanitize')
        .useMissingTranslationHandlerLog();
      tmhDynamicLocaleProvider.localeLocationPattern("bower_components/angular-i18n/angular-locale_{{locale}}.js");
    }]);
