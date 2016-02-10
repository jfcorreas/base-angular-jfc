'use strict';
/*jshint expr: true*/
describe('i18n Controller', function () {
  var i18nController;

  beforeEach(module('baseAngular.i18n'));
  beforeEach(inject(function($controller){
    i18nController = $controller('i18nController');
  }));

	it('Should exist', function() {
	  i18nController.should.exist;
	});

  it('Should provide configured locales', function() {
    i18nController.locales.should.exist;
  });

  it('Should provide change language funtion', function() {
    i18nController.changeLanguage.should.exist;
  });
});
