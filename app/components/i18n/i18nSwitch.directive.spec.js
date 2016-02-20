'use strict';
/*jshint expr: true*/
describe('Switch Language directive', function () {
  var $compile, $rootScope;

  beforeEach(module('baseAngular.i18n', 'app/components/i18n/i18nSwitch.template.html'));
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_) {
    var template = $templateCache.get('app/components/i18n/i18nSwitch.template.html');
		$templateCache.put('/app/components/i18n/i18nSwitch.template.html',template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  function getCompiledElement(){
    var element = angular.element('<i18n-switch></i18n-switch>');
    var compiledElement = $compile(element)($rootScope);
    $rootScope.$digest();

    return compiledElement;
  }

  it('Should show options to change language', inject(function($httpBackend) {

    $httpBackend.whenGET(/\.json$/).respond('');
    $httpBackend.whenGET(/\.html$/).respond('');
    var directiveElement = getCompiledElement();
    var buttonElements = directiveElement.find('option');
    expect(buttonElements.length).to.be.above(1);
	}));

	it('Current language option should be selected', inject(function($controller, $httpBackend) {
		var i18nController = $controller('i18nController');
    i18nController.changeLocale('es_ES');

    $httpBackend.whenGET(/\.json$/).respond('');
    $httpBackend.whenGET(/\.html$/).respond('');
    var directiveElement = getCompiledElement();
    console.log(directiveElement);
    var optionElements = directiveElement.find('option');
    for (var option=0; option < optionElements.length; option++) {
      if (optionElements[option].innerHTML == 'Español') {
        expect(optionElements[option].selected).to.be.true;
      } else {
        expect(optionElements[option].disabled).to.be.false;
      }
    }
	}));
});
