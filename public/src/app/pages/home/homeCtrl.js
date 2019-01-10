
angular.module('TheRadicalCoder').controller('HomeCtrl', ['$scope', '$http', '$state', '$timeout', HomeCtrl]);

function HomeCtrl($scope, $http, $state, $timeout) {
    var vm = this;

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
        }
    ];

    $scope.projectsData = [
        {
            "id": 0,
            "name": "IMIAssist.ai",
            "img_url": "assets/img/projects/imiassist_logo.png",
            "description": "Yoda inspired t-shirt design for a friend"
        },
        {
            "id": 0,
            "name": "IMIBot.ai",
            "img_url": "assets/img/projects/imibot_logo.png",
        },
        {
            "id": 0,
            "name": "FaceWord",
            "img_url": "assets/img/projects/faceword_logo.png",
            "description": "Yoda inspired t-shirt design for a friend"
        },
        {
            "id": 0,
            "name": "YODA T-SHIRT",
            "img_url": "assets/img/designs/yoda_full.png",
            "description": "Yoda inspired t-shirt design for a friend"
        },

    ]

    $scope.changeIndex = function (value) {
        if ($scope.currentIndex == 0 && value < 0) {
            $scope.currentIndex = $scope.designsData.length - 1;
        }
        else if ($scope.currentIndex >= $scope.designsData.length - 1) {
            $scope.currentIndex = 0;
        }
        else {
            $scope.currentIndex += value;
        }

        $timeout(function () { $scope.thumbnailIndex = 0; console.log($scope.currentIndex) }, 50);
    }

    $scope.updateThumbnailIndex = function (value) {
        $timeout(function () { $scope.thumbnailIndex = value }, 50);
    }

    // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
            document.getElementById("goToTop").style.display = "block";
            // document.getElementById("trcNavbar").style.background = "rgba(0,0,0,0.5) !important";
        } else {
            document.getElementById("goToTop").style.display = "none";
            // document.getElementById("trcNavbar").style.background = "rgba(0,0,0,1) !important";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    $scope.goToTop = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

}
