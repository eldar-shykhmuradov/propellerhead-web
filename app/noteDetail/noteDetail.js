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
            $scope.myWelcome = response.statusText;
        });
    };

});