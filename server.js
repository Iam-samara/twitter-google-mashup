var express = require('express'),
    app = express.createServer(),
    oAuth = require('oauth').oAuth2,
    config = require('./config/default.js');

app.use(express.static('client'));

var consumerKey = config.twitter.consumerKey;
var consumerSecret = config.twitter.consumerSecret;


https:var oauth2 = new OAuth2(consumerKey,
       consumerSecret, 
       'https://api.twitter.com/1.1/', 
       null,
       'oauth2/token', 
       null);

//api.twitter.com/1.1/search/tweets.json?q=codeorg&result_type=popular&count=10
var oa = new oAuth()
app.listen(3000, function() {
  console.log('listen on :3000');
});