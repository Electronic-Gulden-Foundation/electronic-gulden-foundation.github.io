'use strict';

angular.module('egulden.controllers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : '/templates/home/index.html',
        controller  : 'homeController'
    });
}])

.controller('homeController', ['$scope', '$http', function($scope, $http) {
    $scope.blocks = [];

    $http.get('/data/blocks.json').then(function(response) {
        var data      = response.data;
        $scope.blocks = data.blocks;
    });
}]);
