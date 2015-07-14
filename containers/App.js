import React from 'react';
import * as stores from '../stores';
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col s2 nav-column'>
          <ul className='nav'>
            <li><Link to='/move-finder'><span className="octicon octicon-alignment-aligned-to"></span>Moves</Link></li>
            <li><Link to='/monster-finder'><span className="octicon octicon-squirrel"></span>Monsters</Link></li>
            <li><Link to='/monster-maker'><span className="octicon octicon-organization"></span>Monster Maker</Link></li>
          </ul>
        </div>
        <div id='content' className='col s10'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
