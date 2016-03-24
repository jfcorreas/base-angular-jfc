'use strict';
/*jshint expr: true*/
describe('i18n Controller', function () {
  var i18nController;

  beforeEach(module('baseAngular.i18n'));
  beforeEach(inject(function($controller){
    i18nController = $controller('I18nController');
  }));

	it('Should exist', function() {
	  expect(i18nController).toBeDefined();
	});

  it('Should provide configured locales', function() {
    expect(i18nController.locales).toBeDefined();
  });

  it('Should provide current locale', function() {
    expect(i18nController.currentLocale).toBeDefined();
  });

  it('Should provide change locale funtion', function() {
    expect(i18nController.changeLocale).toBeDefined();
    i18nController.changeLocale('es_ES');
    expect(i18nController.currentLocale.id).toEqual('es_ES');
    // TODO - Fails if change locale again
    i18nController.changeLocale();
  });
});
