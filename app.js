var app = angular.module("films",['ngRoute']);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/film',{
        templateUrl: 'film.html',
        controller: "filmController"
    })
    .when('/filmek',{
        templateUrl: 'filmek.html',
        controller: "filmekController"
    })
}])