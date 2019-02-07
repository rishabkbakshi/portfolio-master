'use strict';

angular
    .module('TheRadicalCoder')
    .directive('trcNavbar', () => {
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
            controller: trcNavbarCtrl
        };
    });