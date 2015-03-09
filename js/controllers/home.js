'use strict';

angular.module('egulden.controllers')

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : '/templates/home/index.html',
        controller  : 'homeController'
    });
}])

.controller('homeController', ['$scope', '$http', function($scope, $http) {
    $scope.blocks     = [];

    $http.get('/data/blocks.json').then(function(response) {
        var data      = response.data;
        $scope.blocks = data.blocks;
    });

    $scope.corePoints = [
        {
            img         : '/img/icons/home.png',
            icon        : 'signal',
            title       : 'Sparen is belangrijk',
            description : 'Als je niet spaart wordt je arm. Doe mee met het spaarprogramma'
        },
        {
            img         : '/img/icons/home.png',
            icon        : 'home',
            title       : 'Voor u, voor iedereen',
            description : 'Wij vinden het heel belangrijk dat iedereen begrijpt hoe het werkt'
        },
        {
            img         : '/img/icons/phone.png',
            icon        : 'phone',
            title       : 'Altijd en overal controle',
            description : 'U heeft altijd en overal toegang tot uw geld'
        },
        {
            img         : '/img/icons/home.png',
            icon        : 'qrcode',
            title       : 'Eenvoudig betalen',
            description : 'Betaal eenvoudig met uw mobiele telefoon'
        },
        {
            img         : '/img/icons/home.png',
            icon        : 'qrcode',
            title       : 'Eenvoudig betalen',
            description : 'Betaal eenvoudig met uw mobiele telefoon'
        },
        {
            img         : '/img/icons/home.png',
            icon        : 'qrcode',
            title       : 'Eenvoudig betalen',
            description : 'Betaal eenvoudig met uw mobiele telefoon'
        }
    ];
}]);
