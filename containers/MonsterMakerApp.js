import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Help from '../components/Help';
import MonsterMaker from '../components/MonsterMaker';
import * as MonsterMakerActions from '../actions/MonsterMakerActions';
import _ from 'lodash'

@connect(state => ({
  monster: state.monster
}))

export default class MoveFinderApp {
  render() {
    const { dispatch } = this.props;
    return (
      <MonsterMaker
        {...bindActionCreators(MonsterMakerActions, dispatch)} />
    );
  }
}
