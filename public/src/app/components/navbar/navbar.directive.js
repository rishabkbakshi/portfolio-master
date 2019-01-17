'use strict';

theRadicalCoder.directive('trcNavbar', () => {
    return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: trcNavbarCtrl
    };
});