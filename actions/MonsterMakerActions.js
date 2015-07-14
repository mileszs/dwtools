import { CREATE_MONSTER } from '../constants/ActionTypes';

export function chooseMonster(category) {
  return {
    type: CHOOSE_MONSTER,
    data: category
  }
}
