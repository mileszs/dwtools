import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Help from '../components/Help';
import MoveFinder from '../components/MoveFinder';
import * as MoveActions from '../actions/MoveActions';

@connect(state => ({
  ...state.move
}))

export default class MoveFinderApp {
  render() {
    console.log(this.props, this.state)
    const { moves, lastChoice, yourMove, dispatch } = this.props;
    return (
      <div className='row'>
        <MoveFinder moves={moves} lastChoice={lastChoice} yourMove={yourMove}
        {...bindActionCreators(MoveActions, dispatch)} />
        <Help moves={moves} lastChoice={lastChoice} yourMove={yourMove} {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
