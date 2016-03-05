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

  it ('On first load, no user is authenticated', function() {
    UsersService.getAuthenticatedUser.should.exist;
    var emptyUser = UsersService.getAuthenticatedUser();
    emptyUser.should.be.empty;
  });

  describe('Login', function() {
    it ('Should authenticate a valid user', function() {
      UsersService.doLogin('guest','guest', function(response) {
        response.success.should.be.true;
      });
    });

    it ('Should fail with an incorrect user', function() {
      UsersService.doLogin('falseUser','guest', function(response) {
        response.success.should.be.false;
        response.message.should.be.equal('Username or password is incorrect');
      });
    });

    it ('Should fail with an incorrect password', function() {
      UsersService.doLogin('guest','falsePassword', function(response) {
        response.success.should.be.false;
        response.message.should.be.equal('Username or password is incorrect');
      });
    });
  });

  it ('Should supply the current authenticated user', function() {
    UsersService.getAuthenticatedUser.should.exist;
    var emptyUser = UsersService.getAuthenticatedUser();
    emptyUser.should.be.empty;
    // currentUser.userRoles.length.should.be.above(0);
  });

});
