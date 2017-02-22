var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: '/partials/home.ejs'
    }).
    when('/speakers', {
        templateUrl: '/partials/speakers.ejs'
    }).
    otherwise({
        redirectTo: '/home'
    })
}]);
