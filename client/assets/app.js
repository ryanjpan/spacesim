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
         .when('/game',{
             templateUrl: 'partials/game.html',
             controller: 'gameController'
        })
         .when('/lose',{
             templateUrl: 'partials/lose.html',
        })
         .when('/win',{
             templateUrl: 'partials/win.html',
        })

         .when('/components',{
             templateUrl: 'partials/components.html',
             controller: 'optionsController'
        })
         .when('/schedule',{
             templateUrl: 'partials/schedule.html',
             controller: 'taskController'
        })

        .otherwise({
            redirectTo: '/'
        })
});
