import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import MonsterMaker from '../components/MonsterMaker';
import * as MonsterMakerActions from '../actions/MonsterMakerActions';
import _ from 'lodash'

@connect(state => ({
  ...state.monsterMaker
}))

export default class MoveFinderApp {
  render() {
    const { attributes, customMonster, dispatch } = this.props
    return (
      <MonsterMaker attributes={attributes} monster={customMonster}
        {...bindActionCreators(MonsterMakerActions, dispatch)} />
    );
  }
}
