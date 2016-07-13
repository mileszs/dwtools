var ghpages = require('gh-pages');
var path = require('path');

var logger = function(message) {
  console.log(message);
}

var callback = function(err) {
  if (err) {
    console.log('Build errors OH NOES', err);
  } else {
    console.log('Built, yo');
  }
}

ghpages.publish(path.join(__dirname, '..', 'build'), { add: true, logger: logger }, callback);
