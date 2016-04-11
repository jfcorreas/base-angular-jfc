'use strict';
/*jshint expr: true*/
describe('Users Controller', function () {
  var usersController, usersService;

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

  it('Should provide doLogin function and UsersService.doLogin is called', function() {
    spyOn(usersService,'doLogin');
    usersController.doLogin();
    expect(usersService.doLogin).toHaveBeenCalled();
  });
});
