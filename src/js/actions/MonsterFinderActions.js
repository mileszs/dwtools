import * as types from '../constants/ActionTypes';

export function chooseMonster(category, monster) {
  return {
    type: types.CHOOSE_MONSTER,
    category: category,
    monster: monster
  }
}

export function chooseCategory(category) {
  return {
    type: types.CHOOSE_CATEGORY,
    category: category
  }
}

