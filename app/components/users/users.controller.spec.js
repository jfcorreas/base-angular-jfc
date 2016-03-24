'use strict';
/*jshint expr: true*/
describe('Users Controller', function () {
  var usersController;

  beforeEach(module('baseAngular.users'));
  beforeEach(inject(function($controller){
    usersController = $controller('UsersController');
  }));

	it('Should exist', function() {
	  expect(usersController).toBeDefined();
	});

  it('Should provide current authenticated user', function() {
    expect(usersController.currentUser).toBeDefined();
  //  usersController.currentUser.username.should.exist;
  //  usersController.currentUser.userRoles.length.should.be.above(0);
  });
});
