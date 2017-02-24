var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers',
    'ngSanitize'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/home', {
        templateUrl: 'partials/home.ejs',
        controller: 'listControllerHome'
    })
    .when('/speakers', {
        templateUrl: 'partials/speakers.ejs',
        controller: 'listControllerSpeakers'
    })
    .when('/speakers/:speakerid', {
        templateUrl: 'partials/speakers.ejs',
        controller: 'listControllerDetails'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);
