var tweet = prompt("Compose your tweet")
var tweetCount = tweet.length
alert(
  "u have written " +
    tweetCount +
    "characters, you have " +
    (140 - tweetCount) +
    "characters remaining."
)
