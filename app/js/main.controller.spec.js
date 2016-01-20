'use strict';
/*jshint expr: true*/
describe('Main Controller', function () {
  var scope, createController;

  beforeEach(module('baseAngular'));

  describe('First Test', function() {
  	it('Should be TODO', inject(function($controller) {
  		var mainController = $controller('MainController');
		  mainController.todo.should.be.true;
  	}));
  });
});
