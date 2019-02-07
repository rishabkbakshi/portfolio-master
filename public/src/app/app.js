// const APP_URL = "http://localhost:4007/";
const APP_URL = "https://rishabkbakshi.herokuapp.com/"

angular
    .module('TheRadicalCoder', [
        'ui.router',
        'angular-loading-bar',
        'ngRoute'
    ])
    .config([
        '$urlRouterProvider',
        '$stateProvider',
        ($urlRouterProvider, $stateProvider) => {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    title: 'Home',
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                })

        }
    ])


