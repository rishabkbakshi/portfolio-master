
angular
    .module('TheRadicalCoder')
    .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$http', '$state', '$timeout']

function HomeCtrl($scope, $http, $state, $timeout) {

    console.log("Running HomeCtrl");

    $scope.hello = "hello";
    $scope.currentIndex = 0;
    $scope.thumbnailIndex = 0;

    $scope.designsData = [
        {
            "id": 0,
            "name": "YODA T-SHIRT",
            "img_url": "assets/img/designs/yoda_full.png",
            "description": "Yoda inspired t-shirt design for a friend",
            "thumbnails": [
                {
                    "index": 0,
                    "img_url": "assets/img/designs/yoda_front.png",
                },
                {
                    "index": 1,
                    "img_url": "assets/img/designs/yoda_back.png",
                },
                {
                    "index": 2,
                    "img_url": "assets/img/designs/yoda_full.png",
                },
            ]
        },
        {
            "id": 1,
            "name": "Pun-king T-Shirt",
            "img_url": "assets/img/designs/punking_full.png",
            "description": "Yoda inspired t-shirt design for a friend",
            "thumbnails": [
                {
                    "index": 0,
                    "img_url": "assets/img/designs/punking_front.png",
                },
                {
                    "index": 1,
                    "img_url": "assets/img/designs/punking_back.png",
                },
                {
                    "index": 2,
                    "img_url": "assets/img/designs/punking_full.png",
                },
            ]
        },
        {
            "id": 2,
            "name": "Young Tiger T-Shirt",
            "img_url": "assets/img/designs/youngtiger_full.png",
            "description": "Yoda inspired t-shirt design for a friend",
            "thumbnails": [
                {
                    "index": 0,
                    "img_url": "assets/img/designs/youngtiger_front.png",
                },
                {
                    "index": 1,
                    "img_url": "assets/img/designs/youngtiger_back.png",
                },
                {
                    "index": 2,
                    "img_url": "assets/img/designs/youngtiger_full.png",
                },
            ]
        },
        {
            "id": 3,
            "name": "IEEE T-shirt",
            "img_url": "assets/img/designs/ieee_full.jpg",
            "description": "Einstein inspired T-Shirt for the IEEE Student Branch",
            "thumbnails": [
                {
                    "index": 0,
                    "img_url": "assets/img/designs/ieee_full.jpg",
                }
            ]
        },
        // {
        //     "id": 4,
        //     "name": "BrainWaves Event Poster",
        //     "img_url": "assets/img/designs/brainwaves_workshop.jpg",
        //     "description": "Technical Event poster from IEEE Student Branch",
        //     "thumbnails": [
        //         {
        //             "index": 0,
        //             "img_url": "assets/img/designs/brainwaves_workshop.jpg",
        //         }
        //     ]
        // },
    ];

    $scope.projectsData = [
        {
            "id": 0,
            "name": "IMIAssist.ai",
            "img_url": "assets/img/projects/webrtc.png",
            "description": " AI-enabled Realtime video calling and assistance application",
            "content_url": ""
        },
        {
            "id": 1,
            "name": "IMIBot.ai",
            "img_url": "assets/img/projects/imibot.png",
            "description": "A platform for IMI Mobile to create and deploy ChatBots",
            "content_url": ""
        },
        {
            "id": 2,
            "name": "FaceWord",
            "img_url": "assets/img/projects/faceword.png",
            "description": "Webapp that logins in through Facial Recognition",
            "content_url": "https://github.com/rishabkbakshi/ece415-faceword-demo"
        },
        {
            "id": 3,
            "name": "SmartQuiz",
            "img_url": "assets/img/projects/smartquiz.png",
            "description": "Trivia Quiz Game built using ReactJS and PostgreSQL",
            "content_url": "https://github.com/rishabkbakshi/smartquiz-master"
        },
        {
            "id": 4,
            "name": "SmartVision",
            "img_url": "assets/img/projects/smartvision.png",
            "description": "Face detection Web App built using React and Clarifai API",
            "content_url": "https://github.com/rishabkbakshi/smartvision-master"
        },
        {
            "id": 5,
            "name": "SmartWord",
            "img_url": "assets/img/projects/smartword.png",
            "description": "Word games implemented in VanillaJS (ES6)",
            "content_url": "https://github.com/rishabkbakshi/simple-js-games"
        }

    ]

    $scope.changeIndex = (value) => {
        ($scope.currentIndex == 0 && value < 0) ? $scope.currentIndex = $scope.designsData.length - 1
            : ($scope.currentIndex >= $scope.designsData.length - 1) ? $scope.currentIndex = 0
                : $scope.currentIndex += value;

        $timeout(() => { $scope.thumbnailIndex = 0 }, 50);
    }

    $scope.updateThumbnailIndex = (value) => {
        $timeout(() => { $scope.thumbnailIndex = value }, 50);
    }

    // window.onscroll = function () { scrollFunction() };

    // const scrollFunction = () => {
    //     (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) ? document.getElementById("goToTop").style.display = "block" : document.getElementById("goToTop").style.display = "none";
    // }

    // $scope.goToTop = () => {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // }

}
