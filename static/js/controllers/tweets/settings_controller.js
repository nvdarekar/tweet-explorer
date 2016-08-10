"use stict"
var app = angular.module("TweetExplorerApp")
/**
Controller for display Settings of the tweet dashboard
*/
app.controller("SettingsController",
    function($scope, $location) {
        $scope.settings = JSON.parse(localStorage.getItem("config"));
        $scope.originalSettings = angular.copy($scope.settings);
        $scope.tweetCountsOptions = [5, 10, 20, 30];
        $scope.userNameOptions = ["AppDirect", "LaughingSquid", "TechCrunch"];
        $scope.saveSettings = function(){
            localStorage.setItem("config", JSON.stringify( $scope.settings));
            $location.path("/tweets");
        }
        $scope.resetSettings = function(){
            $scope.settings = angular.copy($scope.originalSettings);
        }
});
