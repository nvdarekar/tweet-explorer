'use strict';
var app = angular.module("TweetExplorerApp");

/**
Service for accessing the twitter public REST apis.
*/
app.factory('TwitterService',
    function ($http, $q) {
    /**
     * fetches last n tweets json using twitter rest api
     * @param {String } screen_name
     * @param {Number} tweetCount
     * returns promise of tweets json
     */
    var fetchTweets = function (screen_name, tweetCount) {
        console.log("here");
        var url = "http://localhost:7890/1.1/statuses/user_timeline.json?count="+tweetCount.toString()+"&screen_name=" + screen_name;
        return $http.get(url)
                .then(function(response) {
                    return $q.resolve(response.data)
                }, function(response) {
                    return $q.reject(response.data);
                });
    };

    return {
        fetchTweets: fetchTweets,
    };
});
