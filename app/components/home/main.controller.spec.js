'use strict';
/*jshint expr: true*/
describe('Main Controller', function () {
  var scope, createController;

  beforeEach(module('baseAngular'));

  describe('MainController', function() {
  	it('Should exist', inject(function($controller) {
  		var mainController = $controller('MainController');
		  mainController.should.exist;
  	}));
  });

  describe('Change Language', function() {
    it('Should exist', inject(function($controller) {
      var mainController = $controller('MainController');
      mainController.changeLanguage.should.exist;
    }));
    it('Should change the language', inject(function($controller) {
      var mainController = $controller('MainController');
      mainController.getCurrentLanguage().should.equal('en_US');
      mainController.changeLanguage('es_ES');
      mainController.getCurrentLanguage().should.equal('es_ES');
    }));
  });
});
