'use strict';

angular.module('egulden.directives')

.directive('ngHeader', function() {
    return {
        templateUrl  : 'templates/partials/header.html',
        controllerAs : 'headerCtrl',
        controller   : function($location) {
            this.itemIsActive = function(item) {
                return (item.url == $location.path());
            };

            this.links = [
                {
                    text : 'Wie zijn we',
                    url  : '/wiezijnwe'
                },
                {
                    text : 'Vrienden',
                    url  : '/vrienden'
                },
                {
                    text : 'Contact',
                    url  : '/contact'
                }
            ];
        }
    }
});
