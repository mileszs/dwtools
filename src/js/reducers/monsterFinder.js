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
  switch (action.type) {
    case types.CHOOSE_MONSTER: {
      let monster = _.sample(monstersJSON[action.data])
      console.log('monster list', monster)
      return {
        categories: _.keys(monstersJSON),
        chosenCategory: action.data,
        monster: monster
      };
    }
    default:
      console.log('state', state)
      return state;
  }
}
