// const APP_URL = "http://localhost:4007/";
const APP_URL = "https://theradicalmaster.herokuapp.com/"

const theRadicalCoder = angular.module('TheRadicalCoder', [
    'ui.router',
    'angular-loading-bar'
])

const routeConfig = ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            title: 'Home',
            templateUrl: 'app/pages/home/home.html',
            controller: 'HomeCtrl'
        })

}


theRadicalCoder.config(routeConfig);

