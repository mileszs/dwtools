import * as types from '../constants/ActionTypes';

export function chooseMove(move) {
  return {
    type: types.CHOOSE_MOVE,
    data: move
  };
}

export function resetMove() {
  return {
    type: types.RESET_MOVE
  };
}
