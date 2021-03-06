"use strict";
var app = angular.module("TweetExplorerApp", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/tweets", {
            templateUrl : "/templates/tweet_dashboard.html",
            controller  : "TweetDashboardController"
        })
        .when("/settings", {
            templateUrl : "/templates/settings.html",
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
        no_of_columns:3,
        display_photo:"Yes"
    };
    localStorage.setItem("config", JSON.stringify(config));
    $location.path("/tweets");
});
