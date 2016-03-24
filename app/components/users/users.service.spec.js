'use strict';
/*jshint expr:true */
describe('Users Service', function() {
  var UsersService;

  beforeEach(module('baseAngular.users'));
  beforeEach(inject(function(_UsersService_) {
    UsersService = _UsersService_;
  }));

  it ('Should exists', function() {
    expect(UsersService).toBeDefined();
  });

  it ('On first load, no user is authenticated', function() {
    expect(UsersService.currentUser).toBeDefined();
    expect(UsersService.currentUser().username).toEqual('');
    expect(UsersService.currentUser().isLogged).toBeFalsy;
  });

  describe('Login function', function() {
    it ('Should authenticate a valid user', function() {
      UsersService.doLogin('guest','guest', function(response) {
        expect(response.success).toBeTruthy;
        expect(UsersService.currentUser().username).toEqual('guest');
        expect(UsersService.currentUser().isLogged).toBeTruthy();
      });
    });

    it ('Should fail with an incorrect user', function() {
      UsersService.doLogin('falseUser','guest', function(response) {
        expect(response.success).toBeFalsy();
        expect(response.message).toEqual('Username or password is incorrect');
        expect(UsersService.currentUser().username).toEqual('');
        expect(UsersService.currentUser().isLogged).toBeFalsy();
      });
    });

    it ('Should fail with an incorrect password', function() {
      UsersService.doLogin('guest','falsePassword', function(response) {
        expect(response.success).toBeFalsy();
        expect(response.message).toEqual('Username or password is incorrect');
        expect(UsersService.currentUser().username).toEqual('');
        expect(UsersService.currentUser().isLogged).toBeFalsy();
      });
    });
  });

  describe('Logout function', function() {
    it('Should clean currentUser', function() {
      UsersService.doLogin('guest','guest', function(response) {
        expect(response.success).toBeTruthy();
        expect(UsersService.currentUser().username).toEqual('guest');
        expect(UsersService.currentUser().isLogged).toBeTruthy();
        UsersService.doLogout(function (response) {
          expect(response.success).toBeTruthy();
          expect(UsersService.currentUser().username).toEqual('');
          expect(UsersService.currentUser().isLogged).toBeFalsy();
        });
      });
    });
  });
});
