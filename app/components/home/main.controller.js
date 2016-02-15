// main.controller.js

// Johnpapa's angular style guide
// [Style Y001] Define 1 component per file
// [Style Y010] Wrap Angular components in an Immediately Invoked Function Expression (IIFE)
// [Style Y020] Use unique naming conventions with separators for sub-modules (app y app.submodule)
// [Style Y021] Declare modules without a variable using the setter syntax
// [Style Y022] When using a module, avoid using a variable and instead use chaining with the getter syntax
// [Style Y023] Only set once and get for all other instances
// [Style Y024] Use named functions instead of passing an anonymous function in as a callback
// [Style Y030] Use the controllerAs syntax over the classic controller with $scope syntax
// [Style Y031] The controllerAs syntax uses this inside controllers which gets bound to $scope
// [Style Y032] Use a capture variable for this when using the controllerAs syntax (vm, for example)
// [Style Y033] Place bindable members at the top of the controller, alphabetized, and not spread through the controller code
// [Style Y034] Use function declarations to hide implementation details
//
(function() {
    'use strict';

    angular
        .module('baseAngular')
        .controller('MainController', ['$translate', MainController]);

    function MainController($translate) {
        var vm = this;

        vm.today = new Date();
    }
})();
