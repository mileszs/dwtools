import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Help from '../components/Help';
import MoveFinder from '../components/MoveFinder';
import * as MoveActions from '../actions/MoveActions';

@connect(state => ({
  move: state.move
}))

export default class MoveFinderApp {
  render() {
    const { move, dispatch } = this.props;
    return (
      <div className='row'>
        <MoveFinder move={move}
        {...bindActionCreators(MoveActions, dispatch)} />
        <Help move={move} {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
