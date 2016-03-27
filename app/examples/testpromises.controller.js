// testpromises.controller.js

(function() {

    'use strict';

    angular
        .module('testpromises')
        .controller('SearchController', ['searchService', SearchController]);

    function SearchController(searchService) {
        var vm = this;

        vm.query = 'abc';
        vm.results = undefined;
        vm.error = undefined;

        searchService.search(vm.query)
          .then(function(data){
            vm.results = data;
          })
          .catch(function(){
            vm.error = 'Error detected';
          });

    }
})();
