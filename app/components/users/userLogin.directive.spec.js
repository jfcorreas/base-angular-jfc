'use strict';
/*jshint expr: true*/
describe('User Login directive', function () {
  var $compile, $rootScope;

  beforeEach(module('baseAngular.users', 'app/components/users/userLogin.template.html'));
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_) {
    var template = $templateCache.get('app/components/users/userLogin.template.html');
		$templateCache.put('/app/components/users/userLogin.template.html',template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  function getCompiledElement(){
    var element = angular.element('<user-login></user-login>');
    var compiledElement = $compile(element)($rootScope);
    $rootScope.$digest();

    return compiledElement;
  }

  it('Should show login form', inject(function($httpBackend) {

    $httpBackend.whenGET(/\.json$/).respond('');
    $httpBackend.whenGET(/\.html$/).respond('');
    var directiveElement = getCompiledElement();
    var buttonElements = directiveElement.find('span');
    expect(buttonElements.length).to.be.equal(1);
	}));
});
