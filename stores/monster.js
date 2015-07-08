import { CHOOSE_MONSTER, RESET_MONSTER } from '../constants/ActionTypes';
import monstersJSON from '../data/monsters'
import _ from 'lodash'

export default function monster(state = {}, action) {
  /* 
   * { categories: [], chosenCategory: '', monster: '' };
   */
  switch (action.type) {
  case CHOOSE_MONSTER:
    let monsterList = monstersJSON[action.data]
    let monster = _.sample(monsterList)
    return {
      categories: _.keys(monstersJSON),
      chosenCategory: action.data,
      monster: monster
    };
  case RESET_MONSTER:
    return { categories: _.keys(monstersJSON), chosenCategory: '', monster: '' };
  default:
    return { categories: _.keys(monstersJSON), chosenCategory: '', monster: '' }
  }
}
