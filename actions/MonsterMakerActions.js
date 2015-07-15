import { CHANGE_MONSTER, RESET_MONSTER_MAKER } from '../constants/ActionTypes';

export function changeMonster(attrs) {
  return {
    type: CHANGE_MONSTER,
    data: attrs
  }
}

export function resetMonsterMaker(attrs) {
  return {
    type: RESET_MONSTER_MAKER
  }
}
