import * as types from '../constants/ActionTypes';

export function chooseMonster(category) {
  return {
    type: types.CHOOSE_MONSTER,
    data: category
  }
}

