var ghpages = require('gh-pages');

ghpages.publish('dist', {
	branch: 'gh-pages'
}, function(err) {});