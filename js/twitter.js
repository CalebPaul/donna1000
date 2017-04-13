var consumerKey = require('./../.env').consumerKey;
var consumerSecret = require('./../.env').consumerSecret;
var token = require('./../.env').token;
var tokenSecret = require('./../.env').tokenSecret;
var queryUrl = "https://api.twitter.com/1.1/users/lookup.json?screen_name=finprofpaul"

function TwitterInfo() {}

TwitterInfo.prototype.getFollowers = function(queryUrl, consumerKey, consumerSecret, token, tokenSecret) {
  $.get().then(function(response){
    console.log("count: " + response.followers_count);
  });
};

exports.twitterInfoModule = DonnaTwitter;
