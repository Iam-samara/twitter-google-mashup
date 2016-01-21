var express = require('express'),
    app = express(),
    Twitter = require('twitter'),
    config = require('./config/default.json');

app.use(express.static('client'));
app.get('/', function(req,res) {
  res.sendFile(__dirname + /client/index.html);
})

/** connecting to twitter */
//secret keys in config folder
var client = new Twitter({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  accessTokenKey: config.twitter.accessTokenKey,
  accessTokenSecret: config.twitter.accessTokenSecret
});

client.get('statuses/user_timeline', {screen_name: 'TEDTalks'}, function(error, data, response) {
   if(error) {
    console.error('error', error);
   }
  // console.log(data);//getting code:89 invalid or expired token
});

/** connecting to google */


app.listen(3000, function() {
  console.log('listen on :3000');
});