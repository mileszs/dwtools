import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MonsterMakerActions from '../actions/MonsterMakerActions';
import MonsterMaker from '../components/MonsterMaker';

class MonsterMakerApp extends Component {
  static propTypes = {
    monsterMaker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props)
    const { actions, dispatch } = this.props
    const { attributes, customMonster } = this.props.monsterMaker
    return <MonsterMaker attributes={attributes} monster={customMonster} actions={actions} />
  }
}

function mapStateToProps(state) {
  return {
    monsterMaker: state.monsterMaker
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MonsterMakerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterMakerApp);
