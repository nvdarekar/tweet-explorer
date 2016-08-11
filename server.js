/*var spawn = require('child_process').spawn;

spawn('twitter-proxy');
spawn('http-server');

console.log('Server running on http://localhost:8080');
console.log('Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=appdirect');
*/
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/static'));
app.use(redirectUnmatched);
function redirectUnmatched(req, res) {
    res.redirect("/");
}
app.listen(port, function () {
     console.log('Server running on http://localhost:8080');
});
