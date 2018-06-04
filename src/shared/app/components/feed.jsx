import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleBookmark() {

  }

  render() {
    const { item } = this.props;
    console.log(item);
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
                <Button className="btn-sm" onClick={this.handleBookmark}>
                  <span className="fas fa-bookmark" />&nbsp;Bookmark
                </Button>
              </div>
            </div>
            <CardText>
              <a style={{ cursor: 'pointer', color: '#0080ff' }} onClick={this.toggle}>View detail</a>
              <Collapse isOpen={this.state.collapse}>
                <div dangerouslySetInnerHTML={{ __html: item['content:encoded'] }} />
              </Collapse>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Feed;
