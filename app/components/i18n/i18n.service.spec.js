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
	  i18nService.should.exist;
	});

  it('Should have configured locales', function() {
    expect(i18nService.getLocales().length).to.be.equal(2);
    i18nService.getLocales()[0].id.should.equal('es_ES');
    i18nService.getLocales()[1].id.should.equal('en_US');
    i18nService.getLocales()[0].display.should.equal('Español');
    i18nService.getLocales()[1].display.should.equal('English');
  });

  it('Should expose current locale', function() {
    i18nService.getCurrentLocale().id.should.equal('en_US');
    i18nService.getCurrentLocale().display.should.equal('English');
  });

  describe('Change Language function', function() {
    it('Should exist', function() {
      i18nService.changeLanguage.should.exist;
    });

    it('Should change the language and mantain current locale', function() {
      i18nService.getCurrentLocale().id.should.equal('en_US');
      i18nService.changeLanguage('es_ES');
      i18nService.getCurrentLocale().id.should.equal('es_ES');
    });
  });

});
