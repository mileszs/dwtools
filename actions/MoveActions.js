import { CHOOSE, RESET } from '../constants/ActionTypes';

export function choose(move) {
  return {
    type: CHOOSE,
    data: move
  };
}

export function reset() {
  return {
    type: RESET
  };
}
