var myApp = angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/home', {
        templateUrl: 'partials/home.ejs',
        controller: 'HomeController'
    })
    .when('/speakers', {
        templateUrl: 'partials/speakers.ejs',
        controller: 'SpeakersController'
    })
    .when('/speakers/:speakerid', {
        templateUrl: 'partials/speakers.ejs',
        controller: 'DetailsController'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);
