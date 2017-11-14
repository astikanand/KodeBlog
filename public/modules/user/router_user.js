angular.module("user").config(function($stateProvider) {
  var login = {
    name: 'login',
    url: '/login',
    templateUrl: 'modules/user/view_login.html',
    controller: 'userController'
  }

  var register = {
    name: 'register',
    url: '/register',
    templateUrl: 'modules/user/view_register.html',
    controller: 'userController'
  }

  var profile = {
    name: 'profile',
    url: '/profile',
    templateUrl: 'modules/user/view_profile.html',
    controller: 'userController'
  }

  var edit = {
    name: 'edit',
    url: '/edit',
    templateUrl: 'modules/user/view_edit.html',
    controller: 'userController'
  }

  $stateProvider.state(login);
  $stateProvider.state(register);
  $stateProvider.state(profile);
  $stateProvider.state(edit);
});
