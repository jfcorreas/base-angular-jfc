'use strict';
/*jshint expr: true*/
describe('Set Language directive', function () {
  var $compile, $rootScope;

  beforeEach(module('baseAngular.i18n'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  function getCompiledElement(){
    var element = angular.element('<ba-set-language></ba-set-language>');
    var compiledElement = $compile(element)($rootScope);
    $rootScope.$digest();

    return compiledElement;
  }

  it('Should show buttons to change language', inject(function($httpBackend) {

    $httpBackend.whenGET(/\.json$/).respond('');
    var directiveElement = getCompiledElement();
    var buttonElements = directiveElement.find('button');
    expect(buttonElements.length).to.be.above(1);
	}));

	it('Should disable current language button', inject(function($controller, $httpBackend) {
		var i18nController = $controller('i18nController');
    i18nController.changeLanguage('es_ES');

    $httpBackend.whenGET(/\.json$/).respond('');
    var directiveElement = getCompiledElement();
    var buttonElements = directiveElement.find('button');

    for (var button=0; button < buttonElements.length; button++) {
      if (buttonElements[button].innerHTML == 'SPANISH') {
        expect(buttonElements[button].disabled).to.be.true;
      } else {
        expect(buttonElements[button].disabled).to.be.false;
      }
    }
	}));
});
