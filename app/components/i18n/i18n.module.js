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
  .module('baseAngular.i18n', ['baseAngular.core','pascalprecht.translate'])
  .constant('LOCALES', {
    'locales': {
        'es_ES': 'Español',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
  })
  .config(['$translateProvider', 'LOCALES', function ($translateProvider, LOCALES) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/resources/locale-',
      suffix: '.json'
    })
      .preferredLanguage(LOCALES.preferredLocale)
      .useSanitizeValueStrategy('sanitize')
      .useMissingTranslationHandlerLog();
  }]);
