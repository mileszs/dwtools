import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MoveFinderActions from '../actions/MoveFinderActions';
import MoveFinder from '../components/MoveFinder';

class MoveFinderApp extends Component {
  static propTypes = {
    moveFinder: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions, dispatch } = this.props
    const { moves, lastChoice, yourMove, categories, chosenCategory } = this.props.moveFinder;
    return (
      <MoveFinder moves={moves} lastChoice={lastChoice} yourMove={yourMove} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    moveFinder: state.moveFinder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MoveFinderActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveFinderApp);
