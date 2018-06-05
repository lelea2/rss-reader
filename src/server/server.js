import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared/app/app.jsx';
const app = express();
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../shared/app/redux/reducers/combine';
import { StaticRouter as Router, matchPath } from 'react-router';
import thunk from '../shared/app/redux/middleware/thunk';
import routeBank from '../shared/routes/routes';
const RSS = require('./rss');

app.use('/dist', express.static('./dist'));

app.get('/api/feeds/:id', async(req, res, next) => {
  try {
    const id = req.params.id;
    const feeds = await RSS.getFeeds(parseInt(id, 10));
    res.json(feeds);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
});

app.get('*', async (req, res) => {
  try {
    //create new redux store on each request
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    let foundPath = null;
    // match request url to our React Router paths and grab component
    let { path, component } = routeBank.routes.find(
      ({ path, exact }) => {
        foundPath = matchPath(req.url,
          {
            path,
            exact,
            strict: false
          }
        )
        return foundPath;
      }) || {};
    // safety check for valid component, if no component we initialize an empty shell.
    if (!component)
      component = {};
    // safety check for fetchData function, if no function we give it an empty promise
    if (!component.fetchData)
      component.fetchData = () => new Promise(resolve => resolve());
    // meat and bones of our isomorphic application: grabbing async data
    await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
    //get store state (js object of entire store)
    let preloadedState = store.getState();
    //context is used by react router, empty by default
    let context = {};
    const html = ReactDOM.renderToString(
      <Provider store={store}>
        <Router context={context} location={req.url}>
          <App />
        </Router>
      </Provider>
    )
    //render helmet data aka meta data in <head></head>
    const helmetData = helmet.renderStatic();
    //check context for url, if url exists then react router has ran into a redirect
    if (context.url)
      //process redirect through express by redirecting
      res.redirect(context.status, 'http://' + req.headers.host + context.url);
    else if (foundPath && foundPath.path == '/404')
      //if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
      res.status(404).send(renderFullPage(html, preloadedState, helmetData))
    else
      //else send down page with initial state and meta data
      res.send(renderFullPage(html, preloadedState, helmetData))
  } catch (error) {
    res.status(400).send(renderFullPage('An error occured.', {}, {}));
  }
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="http://www.clker.com/cliparts/q/I/J/w/u/X/rss-icon-md.png" type="image/ico" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b15209923a00b05"></script>
      </head>
      <body>
        <div class="container">
          <div id="root">${html}</div>
        </div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/assets/app.bundle.js"></script>
      </body>
    </html>
    `
}