import React from 'react';
import Root from './containers/Root';
import { Router } from 'react-router'
import HashHistory from 'react-router/lib/HashHistory'

const history = new HashHistory()

React.render(
  <Root history={history} />,
  document.getElementById('react')
);

