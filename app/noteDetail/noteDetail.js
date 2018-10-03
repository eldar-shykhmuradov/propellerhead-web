'use strict';

angular.module('myApp.noteDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:customerId/noteDetails', {
    templateUrl: 'noteDetail/noteDetail.html',
    controller: 'NoteDetailCtrl'
  });
}])

.controller('NoteDetailCtrl', function($scope, $http, $location, $routeParams, noteService) {
    $scope.customerId = $routeParams.customerId;
    $scope.note = noteService.getNote();
    $scope.errorText = null;
    var VALIDATION_ERROR_CODE = 3;


    $scope.saveNote = function () {
        let method = noteService.getNote() ? "PUT" : "POST";
        let baseUrl = "http://elcuspropellerhead-env.nqjep9prut.ap-southeast-2.elasticbeanstalk.com/customers/" + $scope.customerId + "/notes";
        let url = method === "POST" ? baseUrl : baseUrl + "/" + $scope.note.id;
        $http({
            method : method,
            url : url,
            data: JSON.stringify($scope.note)
        }).then(function mySuccess() {
            $location.path('/customers/' + $scope.customerId+ '/notes');
        }, function myError(response) {
            if (response.data.errorCode === VALIDATION_ERROR_CODE) {
                $scope.errorText = "Validation error :( Unfortunately, You can see it only in console because front-end part of this project was done in hard condition and short period, sorry"
            } else {
                $scope.errorText = response.data.message;
            }
        });
    };

});