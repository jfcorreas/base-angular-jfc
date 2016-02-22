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

  it ('Should supply the current authenticated user', function() {
    UsersService.getAuthenticatedUser.should.exist;
    var currentUser = UsersService.getAuthenticatedUser();
    currentUser.username.should.be.equal('guest');
    currentUser.userRoles.length.should.be.above(0);
  });
});