'use strict';
/*jshint expr: true*/
describe('Users Controller', function () {
  var usersController;
  var usersService;

  beforeEach(module('baseAngular.users'));
  beforeEach(inject(function($controller, _UsersService_){
    usersController = $controller('UsersController');
    usersService = _UsersService_;
  }));

	it('Should exist', function() {
	  expect(usersController).toBeDefined();
	});

  it('Should provide current authenticated user', function() {
    expect(usersController.currentUser).toBeDefined();
    expect(usersController.currentUser.username).toBeDefined();
    expect(usersController.currentUser.isLogged).toBeDefined();
  });

  it('Should initialize message triggers', function() {
    expect(usersController.loginError).toBeFalsy();
    expect(usersController.createUserSuccess).toBeFalsy();
    expect(usersController.createUserError).toBeFalsy();
  });

  describe('doLogin function', function() {
    it('Should provide doLogin function and UsersService.doLogin is called', function() {
      spyOn(usersService,'doLogin').and.callThrough();
      usersController.doLogin();
      expect(usersService.doLogin).toHaveBeenCalled();
    });

    it('doLogin function should fill currentUser on valid login', function() {
      spyOn(usersService,'doLogin').and.callThrough();
      usersController.loginUsername = 'guest';
      usersController.loginPassword = 'guest';
      usersController.doLogin();
      expect(usersService.doLogin).toHaveBeenCalledWith('guest', 'guest', jasmine.any(Function));
      expect(usersController.currentUser.username).toBe('guest');
      expect(usersController.currentUser.isLogged).toBeTruthy();
    });

    it('doLogin function should throw error message on invalid login', function() {
      spyOn(usersService,'doLogin').and.callThrough();
      usersController.loginUsername = 'noUser';
      usersController.loginPassword = 'badPassword';
      usersController.doLogin();
      expect(usersService.doLogin).toHaveBeenCalledWith('noUser', 'badPassword', jasmine.any(Function));
      expect(usersController.currentUser.username).toBe('');
      expect(usersController.currentUser.isLogged).toBeFalsy();
      expect(usersController.loginError).toBeTruthy();
    });
  });

  describe('doLogout function', function() {
    it('Should provide doLogout function and UsersService.doLogout is called', function() {
      spyOn(usersService,'doLogout').and.callThrough();
      usersController.doLogout();
      expect(usersService.doLogout).toHaveBeenCalled();
    });

    it('doLogout function should empty currentUser', function() {
      usersController.loginUsername = 'guest';
      usersController.loginPassword = 'guest';
      usersController.doLogin();
      spyOn(usersService,'doLogout').and.callThrough();
      usersController.doLogout();
      expect(usersService.doLogout).toHaveBeenCalledWith(jasmine.any(Function));
      expect(usersController.currentUser.username).toBe('');
      expect(usersController.currentUser.isLogged).toBeFalsy();
      expect(usersController.loginUsername).toBe('');
      expect(usersController.loginPassword).toBe('');
    });
  });

  describe('createUser function', function() {
    it('Should provide registerUser function, call UsersService.createUser and return success message', function() {
      spyOn(usersService,'createUser').and.callThrough();
      usersController.newUser = 'newUser';
      usersController.newPassword = 'newPassword';
      usersController.createUser();
      expect(usersService.createUser).toHaveBeenCalledWith('newUser', 'newPassword',jasmine.any(Function));
      expect(usersController.createUserSuccess).toBeTruthy();
      expect(usersController.createUserError).toBeFalsy();
    });
    it('Should fail if the user already exists', function() {
      spyOn(usersService,'createUser').and.callThrough();
      usersController.newUser = 'guest';
      usersController.newPassword = 'guestPassword';
      usersController.createUser();
      expect(usersService.createUser).toHaveBeenCalledWith('guest', 'guestPassword',jasmine.any(Function));
      expect(usersController.createUserSuccess).toBeFalsy();
      expect(usersController.createUserError).toBeTruthy();
    });
  });
});
