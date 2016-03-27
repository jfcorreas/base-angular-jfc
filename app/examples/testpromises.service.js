// testpromises.service.js

// [Style Y040] - Services are instantiated with the new keyword, use this for public methods and variables.
//                Since these are so similar to factories, use a factory instead for consistency.
// [Style Y052] - Expose the callable members of the service (its interface) at the top

(function() {

    'use strict';

    angular
        .module('testpromises')
        .factory('searchService', ['$q','$http', searchService]);

  function searchService ($q, $http) {
  	var service = {
      search: search
    };

    return service;

  	function search (query) {
      // We make use of Angular's $q library to create the deferred instance
  		var deferred = $q.defer();

    	$http.get('http://localhost/v1?=q' + query)
      		.success(function(data) {
            // The promise is resolved once the HTTP call is successful.
        		deferred.resolve(data);
      		})
      		.error(function() {
            // The promise is rejected if there is an error with the HTTP call.
        		deferred.reject();
      		});

      // The promise is returned to the caller
    	return deferred.promise;
  	}

  }
})();
