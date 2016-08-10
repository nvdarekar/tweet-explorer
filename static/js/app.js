"use strict";
var app = angular.module("TweetExplorerApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/tweets", {
            templateUrl : "/static/templates/tweet_dashboard.html",
            controller  : "TweetDashboardController"
        })
        .when("/settings", {
            templateUrl : "/static/templates/settings.html",
            controller  : "SettingsController"
        })
        .otherwise({
            redirectTo: "/tweets"
        });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});

app.run(function($location){
    var config = {
        column1_name:"AppDirect",
        column2_name:"LaughingSquid",
        column3_name:"TechCrunch",
        column1_tweet_count:30,
        column2_tweet_count:30,
        column3_tweet_count:30,
    };
    localStorage.setItem("config", JSON.stringify(config));
    $location.path("/tweets");
});
