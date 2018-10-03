'use strict';

angular.module('myApp.notes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers/:customerId/notes', {
    templateUrl: 'notes/notes.html',
    controller: 'NotesCtrl'
  });
}])

.controller('NotesCtrl', function($scope, $http, $location, $routeParams, noteService) {
    $scope.customerId = $routeParams.customerId;
    $scope.notes =  [];

    $scope.go = function (path, note) {
        noteService.setNote(note);
        $location.path( path );
    };

    $scope.deleteNote = function (note) {
        $http({
            method : "DELETE",
            url : "http://elcuspropellerhead-env.nqjep9prut.ap-southeast-2.elasticbeanstalk.com/customers/" + $scope.customerId + "/notes/" + note.id,
        }).then(function mySuccess() {
            let index = $scope.notes.map(e => e.id).indexOf(note.id);
            $scope.notes = [...$scope.notes.slice(0, index), ...$scope.notes.slice(index+1)];
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    };

    $http({
        method : "GET",
        url : "http://elcuspropellerhead-env.nqjep9prut.ap-southeast-2.elasticbeanstalk.com/customers/" + $scope.customerId + "/notes",
        params: {number: 0, count: 1000} //while pagination is not implemented.
    }).then(function mySuccess(response) {
        $scope.notes = response.data.notes;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });

});