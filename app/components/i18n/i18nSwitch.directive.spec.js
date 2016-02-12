'use strict';
/*jshint expr: true*/
describe('Switch Language directive', function () {
  var $compile, $rootScope;

  beforeEach(module('baseAngular.i18n'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
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
    var directiveElement = getCompiledElement();
    var buttonElements = directiveElement.find('option');
    expect(buttonElements.length).to.be.above(1);
	}));

	it('Current language option should be selected', inject(function($controller, $httpBackend) {
		var i18nController = $controller('i18nController');
    i18nController.changeLocale('es_ES');

    $httpBackend.whenGET(/\.json$/).respond('');
    var directiveElement = getCompiledElement();
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
