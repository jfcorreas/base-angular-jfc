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
  .module('baseAngular', [
    'baseAngular.core',
    'baseAngular.i18n',
    'baseAngular.users'
  ])
  .config(['$mdThemingProvider','$mdIconProvider', function($mdThemingProvider,$mdIconProvider) {
    $mdThemingProvider.theme('default')
              .primaryPalette('blue')
              .accentPalette('red');
    $mdIconProvider
      .iconSet('social', 'app/resources/free-flat-social-icons.svg', 60)
    /*  .defaultIconSet('resources/core-icons.svg', 24)*/;
  }]);
