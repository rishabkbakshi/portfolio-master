
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
            "name": "IMIBot.ai",
            "img_url": "assets/img/projects/imibot.png",
            "description": "A platform for IMI Mobile to build channel-aware contextual virtual assistants.",
            "content_url": "https://imimobile.com/products/ai-automation"
        },
        {
            "id": 1,
            "name": "IMIAssist.ai",
            "img_url": "assets/img/projects/webrtc.png",
            "description": " AI-enabled Realtime video calling and assistance application powered by Google WebRTC.",
            "content_url": "https://imimobile.com/solutions/webrtc"
        },
        {
            "id": 2,
            "name": "A.C.E.R Red",
            "img_url": "assets/img/projects/acer-red.png",
            "description": "Official website for the Advanced Cyberinfrastructure for Education and Research implemented in WordPress.",
            "content_url": "https://acer.uic.edu"
        },
        {
            "id": 3,
            "name": "Nagios and Ganglia",
            "img_url": "assets/img/projects/nagios-ganglia.png",
            "description": "Comprehensive monitoring system for in-house High Performance Computing cluster at A.C.E.R",
            "content_url": "https://acer.uic.edu"
        }
    ];

    $scope.hobbyProjects = [
        {
            "id": 0,
            "name": "SmartVision",
            "img_url": "assets/img/projects/smartvision.png",
            "description": "Face detection web application built using React, PostgreSQL and Clarifai API as part of a Udemy course. ",
            "content_url": "https://github.com/rishabkbakshi/smartvision-master"
        },        
        {
            "id": 1,
            "name": "SmartQuiz",
            "img_url": "assets/img/projects/smartquiz.png",
            "description": "A fun trivia Quiz with various categories and user profiles built using ReactJS, PostgreSQL and Open Trivia Database API. ",
            "content_url": "https://github.com/rishabkbakshi/smartquiz-master"
        },
        {
            "id": 2,
            "name": "FaceWord",
            "img_url": "assets/img/projects/faceword.png",
            "description": "Web application to authenticate a user using Facial Recognition through OpenFace, as part of a course project. ",
            "content_url": "https://github.com/rishabkbakshi/ece415-faceword-demo"
        },
        {
            "id": 3,
            "name": "SmartWord",
            "img_url": "assets/img/projects/smartword.png",
            "description": "Word games implemented in VanillaJS to test cognitive load for Rehabilitation Robotics Lab at college.",
            "content_url": "https://github.com/rishabkbakshi/simple-js-games"
        },
        {
            "id": 4,
            "name": "Rehabilitation Robotics Lab",
            "img_url": "assets/img/projects/rrl-red.png",
            "description": "Official website for the Rehabilitation Robotics Laboratory implemented in WordPress.",
            "content_url": "https://rehab-robotics.lab.uic.edu/"
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
