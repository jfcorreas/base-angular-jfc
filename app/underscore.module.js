'use strict';

/**
 * @ngdoc overview
 * @name underscore
 * @description
 * # Underscore
 *
 * Underscore utilities.
 */

angular
  .module('underscore', [])
  .factory('_', ['$window', function($window) {
    return $window._;
  }]);
