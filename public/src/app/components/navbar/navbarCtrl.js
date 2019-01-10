
angular.module('TheRadicalCoder').controller('trcNavbarCtrl', ['$scope', '$http', '$state', trcNavbarCtrl]);

function trcNavbarCtrl($scope, $location) {
    console.log('Navbar is now active')

    $scope.isActive = function(path){
        var currentPath = $location.path().split('/')[1];
        if (currentPath.indexOf('?') !== -1) {
            currentPath = currentPath.split('?')[0];
        }
        return currentPath === path.split('/')[1];
    };
}