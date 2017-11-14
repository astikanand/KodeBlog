angular.module("user").service('userHelper', function( $rootScope, $http, auth, $window) {
    this.login = function(info){
        $http(info).then(function mySuccess(response){
            auth.isAuth = true;
            $window.sessionStorage.token = response.data.message;
            $rootScope.modalTitle = "Login"
            $rootScope.modalBody = "Welcome Back! You are logged in."
            $rootScope.modalLink = "home"
            $('.ui.modal').modal('show');
        }, function myError(response){
            $rootScope.modalTitle = "Error"
            $rootScope.modalBody = "Invalid username or password!"
            $('.ui.modal').modal('show');
        });
    }

    this.register = function(info){
        $http(info).then(function mySuccess(response){
            $rootScope.modalTitle = "Register"
            $rootScope.modalBody = "Welcome! You have successfully registered."
            $rootScope.modalLink = "register"
            $('.ui.modal').modal('show');
        }, function myError(response){
            $rootScope.modalTitle = "Error"
            $rootScope.modalBody = "Please Try Again!"
            $('.ui.modal').modal('show');
        });
    }

    this.userChecker = function(username){
        $http({
            method : "GET",
            url: "user/register/"+username
        }).then(function mySuccess(response){
            if(response.data == null){
                $rootScope.isUsername = false;
            }else{
                $rootScope.isUsername = true;
            }

        }, function myError(response){
            console.log(response.statusText);
        });
    }

    this.emailChecker = function(email){
        $http({
            method : "GET",
            url: "user/register/email/"+email
        }).then(function mySuccess(response){
            if(response.data == null){
                $rootScope.isEmail = false;
            }else{
                $rootScope.isEmail = true;
            }

        }, function myError(response){
            console.log(response.statusText);
        });
    }
});
