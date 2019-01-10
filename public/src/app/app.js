// var APP_URL = "http://localhost:4007/";
var APP_URL = "https://theradicalmaster.herokuapp.com/"

var theRadicalCoder = angular.module('TheRadicalCoder', [
    'ui.router',
    'angular-loading-bar'
])



theRadicalCoder.config(routeConfig);

function routeConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            title: 'Home',
            templateUrl: 'app/pages/home/home.html',
            controller: 'HomeCtrl'
        })

}

