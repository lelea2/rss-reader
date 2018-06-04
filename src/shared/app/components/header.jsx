import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { withRouter } from "react-router-dom";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }

  getId() {
    try {
      const idStr = this.props.match.params.id;
      const id = !isNaN(parseInt(idStr, 10)) ? parseInt(idStr, 10) : 1;
      return id;
    } catch (ex) {
      return 1;
    }
  }

  componentDidMount() {
    this.setState({
      id: this.getId()
    });
  }

  onClick(id) {
    this.setState({
      id
    }, () => {
      this.props.history.push(`/${id}`);
    });
  }

  getColor(id) {
    if (id === this.state.id) {
      return 'success';
    }
    return '';
  }

  renderButtons() {
    // console.log(this.props);
    return (
      <div>
        <Button style={{ marginRight: '10px' }} onClick={this.onClick.bind(this, 1)} color={this.getColor(1)}>BackChannel</Button>
        <Button style={{ marginRight: '10px' }} onClick={this.onClick.bind(this, 2)} color={this.getColor(2)}>The Economist</Button>
        <Button onClick={this.onClick.bind(this, 3)} color={this.getColor(3)}>Matter</Button>
      </div>
    );
  }

  render() {
    return (
      <div className="text-center" style={{ padding: '20px 0' }}>
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/rss-icon.png" width="150" height="150" />
        <h1 style={{ marginTop: '20px', marginBottom: '30px', color: '#FF1493' }}>Simple RSS Feed</h1>
        {this.renderButtons()}
      </div>
    );
  }
}

export default withRouter(Header);
