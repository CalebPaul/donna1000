var DonnaTwitter = require('./../js/twitter.js').twitterInfoModule;

$(document).ready(function() {
  //new Twitter Object
  var newTwitterInfo = new TwitterInfo();

  //bind follower value on load
  var followerCount = newTwitterInfo.getFollowers();
  $('.count').text(followerCount);

});
