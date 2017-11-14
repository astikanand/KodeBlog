angular.module("app").config(function($stateProvider) {
    var home = {
        name: 'home',
        url: '/home',
        templateUrl: 'modules/root/view_home.html'
    }


    $stateProvider.state(home);
});
