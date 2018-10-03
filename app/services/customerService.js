'use strict';

angular.module('myApp')
    .factory('customerService', [
        function() {
            var customer = {};
            var getCustomer = function () {
                return customer;
            };

            var setCustomer = function (arg) {
                customer = arg;
            };

            return {
                getCustomer: getCustomer,
                setCustomer: setCustomer
            };
        }
    ]);
