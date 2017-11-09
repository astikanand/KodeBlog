angular.module("user").config(function($stateProvider) {
    var login = {
        name: 'login',
        url: '/login',
        template: '<h3>Login Page!</h3>',
        controller: 'userController'
    }

    var register = {
        name: 'register',
        url: '/register',
        template: '<h3>Register Page!</h3>',
        controller: 'userController'
    }

    $stateProvider.state(login);
    $stateProvider.state(register);
});
