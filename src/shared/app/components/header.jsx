import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="text-center" style={{ padding: '20px 0' }}>
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/rss-icon.png" width="150" height="150" />
        <h1 style={{ marginTop: '20px', marginBottom: '30px', color: '#FF1493' }}>Simple RSS Feed</h1>
      </div>
    );
  }
}

export default Header;
