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

  it('Should provide current locale', function() {
    i18nController.currentLocale.should.exist;
  });

  it('Should provide change locale funtion', function() {
    i18nController.changeLocale.should.exist;
    i18nController.changeLocale('en_US');
    i18nController.currentLocale.id.should.be.equal('en_US');
    i18nController.changeLocale('es_ES');
    i18nController.currentLocale.id.should.be.equal('es_ES');
  });
});
