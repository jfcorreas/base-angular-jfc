'use strict';

/**
 * @ngdoc overview
 * @name baseAngular
 * @description
 * # baseAngular
 *
 * Main module of the application.
 */

angular
  .module('baseAngular', ['ngRoute','ngSanitize','pascalprecht.translate'])
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
