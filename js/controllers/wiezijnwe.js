'use strict';

angular.module('egulden.controllers')

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/wiezijnwe', {
        templateUrl : '/templates/wiezijnwe/index.html'
    });
}])

.controller('wiezijnweController', function() {

});

