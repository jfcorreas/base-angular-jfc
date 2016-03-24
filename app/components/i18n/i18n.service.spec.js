'use strict';
/*jshint expr: true*/
describe('i18n Service', function () {
  var i18nService;

  beforeEach(module('baseAngular.i18n', function($provide, $translateProvider){
    $provide.constant('LOCALES', {
      'locales': {
          'es_ES': 'Español',
          'en_US': 'English'
      },
      'preferredLocale': 'en_US'
    });
    $translateProvider.preferredLanguage('en_US');
  }));
  beforeEach(inject(function(_i18nService_){
    i18nService = _i18nService_;
  }));

	it('Should exist', function() {
	  expect(i18nService).toBeDefined();
	});

  it('Should have configured locales', function() {
    expect(i18nService.getLocales().length).toEqual(2);
    expect(i18nService.getLocales()[0].id).toEqual('es_ES');
    expect(i18nService.getLocales()[1].id).toEqual('en_US');
    expect(i18nService.getLocales()[0].display).toEqual('Español');
    expect(i18nService.getLocales()[1].display).toEqual('English');
  });

  it('Should expose current locale', function() {
    expect(i18nService.getCurrentLocale().id).toEqual('en_US');
    expect(i18nService.getCurrentLocale().display).toEqual('English');
  });

  describe('Change Language function', function() {
    it('Should exist', function() {
      expect(i18nService.changeLanguage).toBeDefined();
    });

    it('Should change the language and mantain current locale', function() {
      expect(i18nService.getCurrentLocale().id).toEqual('en_US');
      i18nService.changeLanguage('es_ES');
      expect(i18nService.getCurrentLocale().id).toEqual('es_ES');
    });
  });

});
