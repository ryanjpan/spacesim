var app = angular.module('spacesim', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/start.html',
            controller: 'optionsController'
        })
        .when('/newmission',{
             templateUrl: 'partials/newmission.html',
             controller: 'optionsController'
        })
         .when('/habitat',{
             templateUrl: 'partials/habitat.html',
             controller: 'optionsController'
         })
         .when('/interior',{
             templateUrl: 'partials/interior.html',
             controller: 'optionsController'
        })
         .when('/task',{
             templateUrl: 'partials/task.html',
             controller: 'optionsController'
        })
         .when('/test',{
             templateUrl: 'partials/test.html',
             controller: 'gameController'
        })
        .otherwise({
            redirectTo: '/'
        })
});
