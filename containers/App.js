import React from 'react';
import MoveFinderApp from './MoveFinderApp';
import * as stores from '../stores';
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col s2 nav-column'>
          <ul className='nav'>
            <li><Link to='/move-finder'><i className='material-icons'>swap_calls</i>Moves</Link></li>
            <li><Link to='/monster-finder'><i className='material-icons'>visibility</i>Monsters</Link></li>
          </ul>
        </div>
        <div className='col s10'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
