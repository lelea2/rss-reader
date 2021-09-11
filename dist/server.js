/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(20);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  routes: [{
    path: '/',
    component: _home2.default,
    exact: true
  }, {
    path: '/:id',
    component: _home2.default,
    exact: true
  }],
  redirects: []
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Types = exports.Types = {
  GET_FEEDS: 'GET_FEEDS'
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var feeds = __webpack_require__(16);
var Parser = __webpack_require__(25);
var parser = new Parser();

var getFeeds = async function getFeeds(id) {
  var feedId = id > feeds.length ? 0 : id - 1;
  var feed = await parser.parseURL(feeds[feedId].url);
  console.log(feed);
  return feed;
};

var getFeedTitles = async function getFeedTitles() {
  return feeds.map(function (feed) {
    return feed.title;
  });
};

module.exports = {
  getFeeds: getFeeds
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _redirectWStatus = __webpack_require__(21);

var _redirectWStatus2 = _interopRequireDefault(_redirectWStatus);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _header = __webpack_require__(19);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      addThisLoaded: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var routes = _routes2.default.routes.map(function (_ref, i) {
        var path = _ref.path,
            component = _ref.component,
            exact = _ref.exact;
        return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
      });
      var redirects = _routes2.default.redirects.map(function (_ref2, i) {
        var from = _ref2.from,
            to = _ref2.to,
            status = _ref2.status;
        return _react2.default.createElement(_redirectWStatus2.default, { key: Math.random() + 'REDIRECT_', from: from, to: to, status: status });
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          routes,
          redirects
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var customMiddleware = function customMiddleware(store) {
  return function (next) {
    return function (action) {
      return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
    };
  };
};
var isFunction = function isFunction(action) {
  return typeof action === 'function';
};

exports.default = customMiddleware;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _feedReducer = __webpack_require__(23);

var _feedReducer2 = _interopRequireDefault(_feedReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  feeds: _feedReducer2.default
});

exports.default = reducers;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  title: 'Back Channel',
  url: 'https://medium.com/feed/backchannel'
}, {
  title: 'The Economist',
  url: 'https://medium.com/feed/the-economist'
}, {
  title: 'Matter',
  url: 'https://medium.com/feed/matter'
}];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(4);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

var _reactDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(1);

var _combine = __webpack_require__(11);

var _combine2 = _interopRequireDefault(_combine);

var _reactRouter = __webpack_require__(15);

var _thunk = __webpack_require__(10);

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var RSS = __webpack_require__(8);

app.use('/dist', _express2.default.static('./dist'));

app.get('/api/feeds/:id', async function (req, res, next) {
  try {
    var id = req.params.id;
    var feeds = await RSS.getFeeds(parseInt(id, 10));
    res.json(feeds);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e);
  }
});

app.get('*', async function (req, res) {
  try {
    //create new redux store on each request
    var store = (0, _redux.createStore)(_combine2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default));
    var foundPath = null;
    // match request url to our React Router paths and grab component

    var _ref = _routes2.default.routes.find(function (_ref2) {
      var path = _ref2.path,
          exact = _ref2.exact;

      foundPath = (0, _reactRouter.matchPath)(req.url, {
        path: path,
        exact: exact,
        strict: false
      });
      return foundPath;
    }) || {},
        path = _ref.path,
        component = _ref.component;
    // safety check for valid component, if no component we initialize an empty shell.


    if (!component) component = {};
    // safety check for fetchData function, if no function we give it an empty promise
    if (!component.fetchData) component.fetchData = function () {
      return new Promise(function (resolve) {
        return resolve();
      });
    };
    // meat and bones of our isomorphic application: grabbing async data
    await component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
    //get store state (js object of entire store)
    var preloadedState = store.getState();
    //context is used by react router, empty by default
    var context = {};
    var html = _server2.default.renderToString(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouter.StaticRouter,
        { context: context, location: req.url },
        _react2.default.createElement(_app2.default, null)
      )
    ));
    //render helmet data aka meta data in <head></head>
    var helmetData = _reactHelmet2.default.renderStatic();
    //check context for url, if url exists then react router has ran into a redirect
    if (context.url)
      //process redirect through express by redirecting
      res.redirect(context.status, 'http://' + req.headers.host + context.url);else if (foundPath && foundPath.path == '/404')
      //if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
      res.status(404).send(renderFullPage(html, preloadedState, helmetData));else
      //else send down page with initial state and meta data
      res.send(renderFullPage(html, preloadedState, helmetData));
  } catch (error) {
    res.status(400).send(renderFullPage('An error occured.', {}, {}));
  }
});

var port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <link rel="icon" href="http://www.clker.com/cliparts/q/I/J/w/u/X/rss-icon-md.png" type="image/ico" />\n        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        ' + helmet.link.toString() + '\n        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b15209923a00b05"></script>\n      </head>\n      <body>\n        <div class="container">\n          <div id="root">' + html + '</div>\n        </div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/dist/assets/app.bundle.js"></script>\n      </body>\n    </html>\n    ';
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feed = function (_Component) {
  _inherits(Feed, _Component);

  function Feed(props) {
    _classCallCheck(this, Feed);

    var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      collapse: false,
      active: false
    };
    return _this;
  }

  _createClass(Feed, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var item = this.props.item;

      this.setState({
        active: localStorage.getItem(item.guid) === 'true' ? true : false
      });
    }
  }, {
    key: 'handleBookmark',
    value: function handleBookmark(item) {
      var guid = item.guid;

      console.log(item);
      var toggleVal = localStorage.getItem(guid) === 'true' ? false : true;
      this.setState({
        active: toggleVal
      }, function () {
        localStorage.setItem(guid, '' + toggleVal);
      });
    }
  }, {
    key: 'getColor',
    value: function getColor(guid) {
      if (this.state.active === true) {
        return 'success';
      } else {
        return 'secondary';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.props.item;
      // console.log(item);

      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '20px' } },
        _react2.default.createElement(
          _reactstrap.Card,
          null,
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-9' },
                _react2.default.createElement(
                  _reactstrap.CardTitle,
                  null,
                  item.title
                ),
                _react2.default.createElement(
                  _reactstrap.CardSubtitle,
                  null,
                  'By: ',
                  item.creator,
                  ' -- ',
                  _react2.default.createElement(
                    'i',
                    null,
                    item.pubDate
                  )
                ),
                item.categories && _react2.default.createElement(
                  'p',
                  { style: { color: '#ddd' } },
                  _react2.default.createElement(
                    'i',
                    null,
                    item.categories.join(', ')
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-3' },
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: this.getColor(item.guid), className: 'btn-sm', onClick: this.handleBookmark.bind(this, item) },
                  _react2.default.createElement('span', { className: 'fas fa-bookmark' }),
                  '\xA0Bookmark'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardText,
              null,
              _react2.default.createElement('div', { className: 'addthis_inline_share_toolbox', 'data-url': item.link, 'data-title': item.title }),
              _react2.default.createElement(
                'a',
                { style: { cursor: 'pointer', color: '#0080ff', marginTop: '15px' }, onClick: this.toggle },
                'View detail'
              ),
              _react2.default.createElement(
                _reactstrap.Collapse,
                { isOpen: this.state.collapse },
                _react2.default.createElement('div', { style: { marginTop: '20px' }, dangerouslySetInnerHTML: { __html: item['content:encoded'] } })
              )
            )
          )
        )
      );
    }
  }]);

  return Feed;
}(_react.Component);

exports.default = Feed;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      id: null
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'getId',
    value: function getId() {
      try {
        var idStr = this.props.match.params.id;
        var id = !isNaN(parseInt(idStr, 10)) ? parseInt(idStr, 10) : 1;
        return id;
      } catch (ex) {
        return 1;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        id: this.getId()
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(id) {
      var _this2 = this;

      this.setState({
        id: id
      }, function () {
        _this2.props.history.push('/' + id);
      });
    }
  }, {
    key: 'getColor',
    value: function getColor(id) {
      if (id === this.state.id) {
        return 'success';
      }
      return '';
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      // console.log(this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { style: { marginRight: '10px' }, onClick: this.onClick.bind(this, 1), color: this.getColor(1) },
          'BackChannel'
        ),
        _react2.default.createElement(
          _reactstrap.Button,
          { style: { marginRight: '10px' }, onClick: this.onClick.bind(this, 2), color: this.getColor(2) },
          'The Economist'
        ),
        _react2.default.createElement(
          _reactstrap.Button,
          { onClick: this.onClick.bind(this, 3), color: this.getColor(3) },
          'Matter'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'text-center', style: { padding: '20px 0' } },
        _react2.default.createElement('img', { src: 'http://icons.iconarchive.com/icons/graphicloads/100-flat/256/rss-icon.png', width: '150', height: '150' }),
        _react2.default.createElement(
          'h1',
          { style: { marginTop: '20px', marginBottom: '30px', color: '#FF1493' } },
          'Simple RSS Feed'
        ),
        this.renderButtons()
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(4);

var _feedActions = __webpack_require__(22);

var actions = _interopRequireWildcard(_feedActions);

var _feed = __webpack_require__(18);

var _feed2 = _interopRequireDefault(_feed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'getId',
    value: function getId() {
      try {
        var idStr = this.props.match.params.id;
        var id = !isNaN(parseInt(idStr, 10)) ? parseInt(idStr, 10) : 1;
        return id;
      } catch (ex) {
        return 1;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getFeed(this.getId());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addThisLoaded = true;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement(
            'title',
            null,
            'Home'
          )
        ),
        !this.props.items ? _react2.default.createElement(
          'div',
          { className: 'text-center' },
          _react2.default.createElement('img', { src: 'https://media.giphy.com/media/rDeOjM6DZ1qda/giphy.gif', width: '200', height: '200', style: { margin: '40px auto', display: 'block' } })
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            this.props.title
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.description
          ),
          this.props.items.map(function (item) {
            return _react2.default.createElement(_feed2.default, { key: item.title, item: item, id: _this2.getId, addThisLoaded: true });
          })
        )
      );
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(_ref) {
      // return store.dispatch(actions.getFeed(1));

      var store = _ref.store;
    }
  }]);

  return Home;
}(_react.Component);

function mapStateToProps(state) {
  return _extends({}, state.feeds);
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
  var key = _ref.key,
      from = _ref.from,
      to = _ref.to,
      status = _ref.status;
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) staticContext.status = status;
      return _react2.default.createElement(_reactRouterDom.Redirect, { key: key, from: from, to: to });
    } });
};
exports.default = RedirectWithStatus;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeed = getFeed;

var _feedTypes = __webpack_require__(6);

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFeed(id) {
  return async function (dispatch, getState) {
    dispatch({
      type: _feedTypes.Types.GET_FEEDS,
      payload: {}
    });

    var _ref = await getFeeds(id),
        data = _ref.data;
    // console.log(data);


    dispatch({
      type: _feedTypes.Types.GET_FEEDS,
      payload: data
    });
  };
}

function getFeeds(id) {
  return _axios2.default.get('http://localhost:9000/api/feeds/' + id);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = feedReducer;

var _feedTypes = __webpack_require__(6);

var initialState = {
  items: null,
  title: null,
  description: null
};

function feedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _feedTypes.Types.GET_FEEDS:
      return _extends({}, state, {
        items: action.payload.items,
        title: action.payload.title,
        description: action.payload.description
      });
    default:
      return state;
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("rss-parser");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map