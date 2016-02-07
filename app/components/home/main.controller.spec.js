'use strict';
/*jshint expr: true*/
describe('Main Controller', function () {
  //var scope, createController;

  beforeEach(module('baseAngular'));

  describe('MainController', function() {
  	it('Should exist', inject(function($controller) {
  		var mainController = $controller('MainController');
		  mainController.should.exist;
  	}));
  });
});
