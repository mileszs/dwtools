import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Help from '../components/Help';
import MoveFinder from '../components/MoveFinder';
import * as MoveActions from '../actions/MoveActions';
import Monsters from '../components/Monsters';
import * as MonsterActions from '../actions/MonsterActions';
import _ from 'lodash'

@connect(state => ({
  ...(_.merge(state.move, state.monster))
}))

export default class MoveFinderApp {
  render() {
    const { moves, lastChoice, yourMove, categories, chosenCategory, monster, dispatch } = this.props;
    return (
      <div className='row'>
        <MoveFinder moves={moves} lastChoice={lastChoice} yourMove={yourMove}
        {...bindActionCreators(MoveActions, dispatch)} />
        <Help moves={moves} lastChoice={lastChoice} yourMove={yourMove} {...bindActionCreators(MoveActions, dispatch)} />
      </div>
    );
  }
}
