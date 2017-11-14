angular.module("user").controller('userController', function($scope, userHelper) {
    $scope.login = function(){
        var info = {
            method: "POST",
            url: "user/login",
            data: {
                "username": $scope.username,
                "password": $scope.password
            }
        }
        userHelper.login(info);
    };

    $scope.register = function(){
        if($scope.name && $scope.username && $scope.email && $scope.password){
            var info = {
                method: "POST",
                url: "user/register",
                data: {
                    "name": $scope.name,
                    "username": $scope.username,
                    "email": $scope.email,
                    "password": $scope.password
                }
            }
            userHelper.register(info);
        }else{
            return
        }
    };

    $scope.profile = function(){};

    $scope.edit = function(){};

    $scope.deleteUser = function(){};


    $scope.passwordChecker = function(){
        if($scope.password == $scope.passwordagain){
            $scope.match = true;
        }else{
            $scope.match = false;
        }
    };

    $scope.usernameChecker = function(){
        userHelper.userChecker($scope.username);
    };

    $scope.useremailChecker = function(){
        userHelper.emailChecker($scope.email);
    };
});
