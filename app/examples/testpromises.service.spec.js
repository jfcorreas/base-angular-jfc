'use strict'

/*jshint expr:true*/
describe('Test Promises Service', function() {
  var service;
  var $httpBackend;
  var $scope;

  beforeEach(module('testpromises'));
  beforeEach(inject(function(searchService, _$httpBackend_,_$rootScope_){
    service = searchService;
    $httpBackend = _$httpBackend_;
    $scope =  _$rootScope_.$new();
  }));

  it('Should receive search results from the backend', function(done){
    var query = 'abc';
    $httpBackend.expectGET('http://localhost/v1?=q' + query)
      .respond([{ id: 1 }, { id: 2 }]);

    service.search(query).then(function(data) {
        expect(data.length).toBe(2);
        done();
    });
    $httpBackend.flush();
  });

  it('Should reject when receive error from the backend', function(done){
    var query = 'abc';
    $httpBackend.expectGET('http://localhost/v1?=q' + query)
      .respond(404);

    service.search(query).catch(function() {
        done(); // se ha capturado el error
    });

    $httpBackend.flush();
  });
});
