import { CHOOSE_MOVE, RESET_MOVE, CHOOSE_MONSTER, RESET_MONSTER } from '../constants/ActionTypes';

export function chooseMonster(category) {
  return {
    type: CHOOSE_MONSTER,
    data: category
  }
}
