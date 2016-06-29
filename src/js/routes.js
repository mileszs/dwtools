import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import MonsterFinderApp from './containers/MonsterFinderApp';
import MoveFinderApp from './containers/MoveFinderApp';
import MonsterMakerApp from './containers/MonsterMakerApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MonsterMakerApp} />
    <Route path="move-finder" component={MonsterMakerApp} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
