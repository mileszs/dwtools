import * as types from '../constants/ActionTypes';

export function changeMonster(attrs) {
  return {
    type: types.CHANGE_MONSTER,
    data: attrs
  }
}

export function resetMonsterMaker(attrs) {
  return {
    type: types.RESET_MONSTER_MAKER
  }
}
