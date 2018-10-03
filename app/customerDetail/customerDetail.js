'use strict';

angular.module('myApp.customerDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customerDetails', {
    templateUrl: 'customerDetail/customerDetail.html',
    controller: 'CustomerDetailCtrl'
  });
}])

.controller('CustomerDetailCtrl', function($scope, $http, $location, customerService) {
    $scope.customer = customerService.getCustomer();
    $scope.errorText = null;
    var VALIDATION_ERROR_CODE = 3;

    $scope.saveCustomer = function () {
        $http({
            method : "put",
            url : "http://elcuspropellerhead-env.nqjep9prut.ap-southeast-2.elasticbeanstalk.com/customers/" + $scope.customer.id,
            data : JSON.stringify($scope.customer)
        }).then(function mySuccess(response) {
            $location.path('/customers');
        }, function myError(response) {
            if (response.data.errorCode === VALIDATION_ERROR_CODE) {
                $scope.errorText = "Validation error :( Unfortunately, You can see it only in console because front-end part of this project was done in hard condition and short period, sorry";
            } else {
                $scope.errorText = response.data.message;
            }
        });
    };
});