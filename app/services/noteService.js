'use strict';

angular.module('myApp')
    .factory('noteService', [
        function() {
        var note = {};
            var getNote = function () {
                return note;
            };

            var setNote = function (arg) {
                note = arg;
            };

            return {
                getNote: getNote,
                setNote: setNote
            };
        }
    ]);
