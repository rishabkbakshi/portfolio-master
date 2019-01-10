'use strict';
theRadicalCoder.directive('trcNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: trcNavbarCtrl
    };
});