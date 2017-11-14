angular.module("app").controller('navController', function($scope, auth) {
    $scope.isLoggedin = function(){
        if(auth.isAuth){
            return true;
        }else {
            return false;
        }
    }
});
