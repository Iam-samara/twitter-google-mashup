var express = require('express'),
    app = express(),
    Twitter = require('twitter'),
    config = require('./config/default.json');

//serves the the client folder holding the html file
app.use(express.static('client'));

/** connecting to twitter */
//secret keys in config folder
var client = new Twitter({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  accessTokenKey: config.twitter.accessTokenKey,
  accessTokenSecret: config.twitter.accessTokenSecret
});

client.get('statuses/user_timeline', {screen_name: 'TEDTalks', count = 10}, function(error, data, response) {
   if(error) {
    console.error('error', error);
   }
  // console.log(data);//getting code:89 invalid or expired token
});

/** connecting to google */

//server turns on at port 3000
app.listen(3000, function() {
  console.log('listen on :3000');
});