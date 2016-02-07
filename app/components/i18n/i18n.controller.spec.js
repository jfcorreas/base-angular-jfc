'use strict';
/*jshint expr: true*/
describe('i18n Controller', function () {

  beforeEach(module('baseAngular.i18n'));

  describe('i18nController', function() {
  	it('Should exist', inject(function($controller) {
  		var i18nController = $controller('i18nController');
		  i18nController.should.exist;
  	}));
  });

  describe('Change Language', function() {
    it('Should exist', inject(function($controller) {
      var i18nController = $controller('i18nController');
      i18nController.changeLanguage.should.exist;
    }));
    it('Should change the language', inject(function($controller) {
      var i18nController = $controller('i18nController');
      i18nController.getCurrentLanguage().should.equal('en_US');
      i18nController.changeLanguage('es_ES');
      i18nController.getCurrentLanguage().should.equal('es_ES');
    }));
  });
});
