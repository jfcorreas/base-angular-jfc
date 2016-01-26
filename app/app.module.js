'use strict';

/**
 * @ngdoc overview
 * @name baseAngular
 * @description
 * # baseAngular
 *
 * Main module of the application.
 */

 var translationsEN = {
   TITLE: 'Hello AngularJS',
   HELLO: 'Hello',
   SPANISH: 'Spanish',
   ENGLISH: 'English',
   MEMBERS: 'members'
 };

 var translationsES = {
   TITLE: 'Hola AngularJS',
   HELLO: 'Hola',
   SPANISH: 'Español',
   ENGLISH: 'Inglés',
   MEMBERS: 'asistentes'
 };

angular
  .module('baseAngular', ['ngSanitize','pascalprecht.translate'])
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider
      .translations('en', translationsEN)
      .translations('es', translationsES)
      .preferredLanguage('en')
      .useSanitizeValueStrategy('sanitize');
  }]);
