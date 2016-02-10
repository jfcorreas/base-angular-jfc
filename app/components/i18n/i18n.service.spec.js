'use strict';
/*jshint expr: true*/
describe('i18n Service', function () {
  var i18nService;

  beforeEach(module('baseAngular.i18n'));
  beforeEach(module(function($provide){
    $provide.value('LOCALES', {
      'locales': {
          'es_ES': 'Español',
          'en_US': 'English'
      },
      'preferredLocale': 'en_US'
    });
  }));
  beforeEach(inject(function(_i18nService_){
    i18nService = _i18nService_;
  }));

	it('Should exist', function() {
	  i18nService.should.exist;
	});

  it('Should have configured locales', function() {
    expect(i18nService.getLocales().length).to.be.above(1);
  });

  it('Should expose current locale', function() {
    i18nService.getCurrentLocale().should.equal('en_US');
  });

  describe('Change Language function', function() {
    it('Should exist', function() {
      i18nService.changeLanguage.should.exist;
    });

    it('Should change the language and mantain current locale', function() {
      i18nService.getCurrentLocale().should.equal('en_US');
      i18nService.changeLanguage('es_ES');
      i18nService.getCurrentLocale().should.equal('es_ES');
    });
  });

});
