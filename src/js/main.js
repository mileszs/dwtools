import '../styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Route, IndexRoute, Redirect, Router, browserHistory } from 'react-router';

// import routes from './routes';

import App from './components/App';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import MonsterFinderApp from './containers/MonsterFinderApp';
import MoveFinderApp from './containers/MoveFinderApp';
import MonsterMakerApp from './containers/MonsterMakerApp';
import NotFoundView from './views/NotFoundView';

const store = configureStore();
const rootElement = document.getElementById('app');

let ComponentEl;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./containers/DevTools').default;

  // If using routes
  ComponentEl = (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MonsterMakerApp} />
          <Route path="move-finder" component={MoveFinderApp} />
          <Route path="monster-maker" component={MonsterMakerApp} />
          <Route path="monster-finder" component={MonsterFinderApp} />
          <Route path="404" component={NotFoundView} />
          <Redirect from="*" to="404" />
        </Route>
      </Router>
      <DevTools />
    </div>
  );
} else {
  ComponentEl = (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MonsterMakerApp} />
          <Route path="move-finder" component={MoveFinderApp} />
          <Route path="monster-maker" component={MonsterMakerApp} />
          <Route path="monster-finder" component={MonsterFinderApp} />
          <Route path="404" component={NotFoundView} />
          <Redirect from="*" to="404" />
        </Route>
      </Router>
    </div>
  );
}

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    {ComponentEl}
  </Provider>,
  rootElement
);
