const feeds = require('./feeds');
let Parser = require('rss-parser');
let parser = new Parser();

const getFeeds = async(id) => {
  const feedId = (id > feeds.length) ? 0 : (id - 1);
  const feed = await parser.parseURL(feeds[feedId].url);
  return feed;
};

const getFeedTitles = async() => {
  return feeds.map((feed) => {
    return feed.title;
  });
};

module.exports = {
  getFeeds
};