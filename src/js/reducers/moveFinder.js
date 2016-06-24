import movesJSON from '../data/moves'
import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  moves: movesJSON,
  lastChoice: [],
  yourMove: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
  /*
   * state = {
   *   moves: [],
   *   lastChoice: ['category', 'category', 'category'],
   *   yourMove: 'Description'
   * }
   */
  case types.CHOOSE_MOVE:
    let moves = state.moves[action.data]
    let lastChoice = action.data
    let yourMove = ''
    if (_.isArray(moves)) {
      yourMove = _(moves).at(Math.floor(Math.random() * moves.length)).first();
    }
    return {
      moves: moves,
      lastChoice: lastChoice,
      yourMove: yourMove
    };
  case types.RESET_MOVE:
    return {
      moves: movesJSON,
      lastChoice: '',
      yourMove: ''
    };
  default:
    return state;
  }
}
