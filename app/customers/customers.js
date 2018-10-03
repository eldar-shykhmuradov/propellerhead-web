'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers', {
    templateUrl: 'customers/customers.html',
    controller: 'CustomersCtrl'
  });
}])

.controller('CustomersCtrl', function($scope, $http, $location, customerService) {
    $scope.customers = [];

    $http({
        method : "GET",
        url : "http://elcuspropellerhead-env.nqjep9prut.ap-southeast-2.elasticbeanstalk.com/customers",
        params: {number: 0, count: 1000} //while pagination is not implemented.
    }).then(function mySuccess(response) {
        $scope.customers = response.data.customers;
    }, function myError(response) {
        $scope.errorText = response.data.errorMessage;
    });

    $scope.go = function (path, customer) {
        customerService.setCustomer(customer);
        $location.path( path );
    };
});