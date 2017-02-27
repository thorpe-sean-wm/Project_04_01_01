// Create a new module
var artistControllers = angular.module('artistControllers', ['ngSanitize']);

artistControllers.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $scope.class = 'speakerslist';
    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.home= true;

    }, function(result){
        console.log('http request failed with result: ' + res);
    });
}]);

artistControllers.controller('SpeakersController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.speakers= true;

    }, function(result){
        console.log('http request failed with result: ' + res);
    });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$route', '$routeParams', function listController($scope, $http, $route, $routeParams) {
    $http.get('/data.json').then(function(res){
        var param = $routeParams.speakerid;
        var speakers = res.data.speakers;
        var artists = [];

        speakers.forEach(function(item){
            if(item.shortname == param){
                artists.push(item);
            }
        });
        $scope.artists = artists;
        $scope.details= true;

    }, function(result){
        console.log('http request failed with result: ' + res);
    });
}]);
