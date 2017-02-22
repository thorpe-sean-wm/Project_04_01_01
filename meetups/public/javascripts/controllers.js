var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').then(function(response) {
        $scope.artists = response.data;
        $scope.artistOrder = "name";
    }, function(result) {
            console.log('http request failed with result:' + result)
        });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('js/data.json').then(function(response) {
        $scope.artists = response.data;
        $scope.whichItem = $routeParams.itemId;

        // set a $scope variable for next & prev array items
        if ($routeParams.itemId > 0)  {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.artists.length -1;
        }
        if ($routeParams.itemId < $scope.artists.length -1)  {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    }, function(result) {
        console.log('http request failed with result:' + result)
    });
}]);

artistControllers.controller('ApplyController', ['$scope',
    function($scope) {
        $scope.register = function() {
            $scope.message = 'Thank you for applying!';
        }
    }]);