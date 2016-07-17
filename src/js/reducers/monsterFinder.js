/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

import monstersJSON from '../data/monsters'
import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  categories: _.keys(monstersJSON)
}

export default function (state = initialState, action) {
  const monsters = monstersJSON[action.category]
  switch (action.type) {
    case types.CHOOSE_MONSTER:
      const monster = _.find(monstersJSON[action.category], (monster)=> {
        return monster.name === action.monster
      })
      return {
        categories: _.keys(monstersJSON),
        chosenCategory: action.category,
        chosenMonster: monster,
        monsters: monsters
      }
    case types.CHOOSE_CATEGORY:
      return {
        categories: _.keys(monstersJSON),
        chosenCategory: action.category,
        monsters: monsters
      }
    default:
      return state;
  }
}
