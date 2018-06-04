import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from './redux/actions/feed-actions';
import Feed from './components/feed.jsx';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  static fetchData({ store }) {
    // return store.dispatch(actions.getFeed(1));
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
    this.props.getFeed(this.getId());
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        {!this.props.items ? (
          <div className="text-center">
            <img src="https://media.giphy.com/media/rDeOjM6DZ1qda/giphy.gif" width="200" height="200" style={{ margin: '40px auto', display: 'block' }} />
          </div>
        ) : (
          <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            {this.props.items.map((item) => {
              return (
                <Feed key={item.title} item={item} id={this.getId} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.feeds,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);
