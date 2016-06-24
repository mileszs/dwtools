import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import MonsterFinderApp from './containers/MonsterFinderApp';
import MoveFinderApp from './containers/MoveFinderApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MoveFinderApp} />
    <Route path="move-finder" component={MoveFinderApp} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
