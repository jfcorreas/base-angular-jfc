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
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/resources/locale-',
      suffix: '.json'
    })
      .preferredLanguage('en_US')
      .useSanitizeValueStrategy('sanitize')
      .useMissingTranslationHandlerLog();
  }])
  .constant('LOCALES', {
    'locales': {
        'es_ES': 'Español',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
});
