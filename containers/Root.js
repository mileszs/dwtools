import React from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'redux/react'
import { createRedux } from 'redux'
import * as stores from '../stores'
import App from './App'
import MoveFinderApp from './MoveFinderApp'
import MonsterFinderApp from './MonsterFinderApp'
import MonsterMakerApp from './MonsterMakerApp'

const redux = createRedux(stores)

export default class Root extends React.Component {
  render () {
    const { history } = this.props
    return (
      <Provider redux={redux}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route component={App}>
        <Route path="move-finder" component={MoveFinderApp} />
        <Route path="monster-finder" component={MonsterFinderApp} />
        <Route path="monster-maker" component={MonsterMakerApp} />
      </Route>
      <Redirect from="/" to="/move-finder" />
    </Router>
  )
}
