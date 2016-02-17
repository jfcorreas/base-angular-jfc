'use strict';
/*jshint expr:true */
describe('Users Service', function() {
  var UsersService;

  beforeEach(module('baseAngular.users'));
  beforeEach(inject(function(_UsersService_) {
    UsersService = _UsersService_;
  }));

  it ('Should exists', function() {
    UsersService.should.exist;
  });
});
