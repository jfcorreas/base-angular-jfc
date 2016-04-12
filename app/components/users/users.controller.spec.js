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
  });
});
