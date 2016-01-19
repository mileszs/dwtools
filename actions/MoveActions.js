import { CHOOSE_MOVE, RESET_MOVE } from '../constants/ActionTypes';

export function chooseMove(move) {
  return {
    type: CHOOSE_MOVE,
    data: move
  };
}

export function resetMove() {
  return {
    type: RESET_MOVE
  };
}
