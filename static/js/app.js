"use strict";
var app = angular.module("TweetExplorerApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/tweets", {
            templateUrl : "/static/templates/tweet_dashboard.html",
            controller  : "TweetDashboardController"
        })
        .otherwise({
            redirectTo: "/"
        });
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
});
app.run(function($location){
    $location.path("/tweets");
});
