var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '..', 'build'), function(err) { 
  if (err) {
    console.log('Build errors OH NOES', err);
  } else {
    console.log('Built, yo');
  }
});
