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

    $scope.saveCustomer = function () {
        $http({
            method : "put",
            url : "http://elcuspropellerhead-env.nqjep9prut.ap-southeast-2.elasticbeanstalk.com/customers/" + $scope.customer.id,
            data : JSON.stringify($scope.customer)
        }).then(function mySuccess(response) {
            $location.path('/customers');
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    };
});