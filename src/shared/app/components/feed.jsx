import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      active: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState({
      active: (localStorage.getItem(item.guid) === 'true') ? true : false
    });
  }

  handleBookmark(item) {
    const { guid } = item;
    console.log(guid);
    const toggleVal = (localStorage.getItem(guid) === 'true') ? false : true;
    this.setState({
      active: toggleVal
    }, () => {
      localStorage.setItem(guid, `${toggleVal}`);
    });
  }

  getColor(guid) {
    if (this.state.active === true) {
      return 'success';
    } else {
      return 'secondary';
    }
  }

  render() {
    const { item } = this.props;
    // console.log(item);
    return (
      <div style={{ marginBottom: '20px' }}>
        <Card>
          <CardBody>
            <div className="row">
              <div className="col-9">
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>By: {item.creator} -- <i>{item.pubDate}</i></CardSubtitle>
                <p style={{ color: '#ddd' }}>
                  <i>{item.categories.join(', ')}</i>
                </p>
              </div>
              <div className="col-3">
                <Button color={this.getColor(item.guid)} className="btn-sm" onClick={this.handleBookmark.bind(this, item)}>
                  <span className="fas fa-bookmark" />&nbsp;Bookmark
                </Button>
              </div>
            </div>
            <CardText>
              <a style={{ cursor: 'pointer', color: '#0080ff' }} onClick={this.toggle}>View detail</a>
              <Collapse isOpen={this.state.collapse}>
                <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{ __html: item['content:encoded'] }} />
              </Collapse>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Feed;
