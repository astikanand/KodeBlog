angular.module("app").controller('rootController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    console.log($scope.firstName);
});
