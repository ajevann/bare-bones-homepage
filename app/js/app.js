angular.module('bbApp', [
    'bbCtrl'
]);

var bbCtrl = angular.module('bbCtrl', []);

bbCtrl.controller('ProjectListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.greeting = 'hola';
        $scope.projects = [];

        $http({
            method: 'GET',
            url: '/assets/projects.json'
        }).then(function successCallback(response) {
            $scope.projects = response.data;
        }, function errorCallback(response) {
            $scope.projects = 'no bueno';
        });
    }
]);

// bbCtrl.controller('ProjectListCtrl', ['$scope', '$http',
//   function ($scope, $http) {
//     $http.get('/assets/projects.json').success(function(data) {
//       $scope.projects = data;
//     });
//   }
// ]);
