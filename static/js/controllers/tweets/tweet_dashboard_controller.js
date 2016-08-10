"use stict"
var app = angular.module("TweetExplorerApp")
/**
Controller for displaying the tweet dashboard
*/
app.controller("TweetDashboardController",
    function($scope, TwitterService) {
        var config = JSON.parse(localStorage.getItem("config"));
        $scope.tweets = {}
        $scope.setTweetFeed = function(columnName, screenName, tweetCount){
            TwitterService.fetchTweets(screenName, tweetCount).then(function(data){
                $scope.tweets[columnName] = data
                console.log($scope.tweets[columnName].length);
            });
        }
        $scope.$watch('config', function() {
            $scope.setTweetFeed("column1", config.column1_name, config.column1_tweet_count);
            $scope.setTweetFeed("column2", config.column2_name, config.column2_tweet_count);
            $scope.setTweetFeed("column3", config.column3_name, config.column3_tweet_count);
        });
});
