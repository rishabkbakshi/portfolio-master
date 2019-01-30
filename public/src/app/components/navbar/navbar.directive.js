'use strict';

angular
    .module('TheRadicalCoder')
    .directive('trcNavbar', () => {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: trcNavbarCtrl
        };
    });