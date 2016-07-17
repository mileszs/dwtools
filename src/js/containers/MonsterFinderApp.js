import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MonsterFinderActions from '../actions/MonsterFinderActions';
import MonsterFinder from '../components/MonsterFinder';

class MonsterFinderApp extends Component {
  static propTypes = {
    monsterFinder: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions, dispatch } = this.props
    const { categories, chosenCategory, chosenMonster, monsters } = this.props.monsterFinder
    return (
      <MonsterFinder categories={categories} chosenCategory={chosenCategory} chosenMonster={chosenMonster} monsters={monsters} actions={actions} />
    )
  }
}

function mapStateToProps(state) {
  return {
    monsterFinder: state.monsterFinder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MonsterFinderActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterFinderApp);
