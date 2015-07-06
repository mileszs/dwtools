import { CHOOSE, RESET } from '../constants/ActionTypes';
import movesJSON from '../moves'
import _ from 'lodash'

export default function move(state = {}, action) {
  switch (action.type) {
  /*
   * state = {
   *   moves: [],
   *   lastChoice: ['category', 'category', 'category'],
   *   yourMove: 'Description'
   * }
   */
  case CHOOSE:
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
  case RESET:
    return {
      moves: movesJSON,
      lastChoice: '',
      yourMove: ''
    };
  default:
    return {
      moves: movesJSON,
      lastChoice: '',
      yourMove: ''
    };
  }
}
