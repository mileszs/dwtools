import { CREATE_MONSTER } from '../constants/ActionTypes';
import _ from 'lodash'

export default function monsterMaker(state = {}, action) {
  switch (action.type) {
  case CREATE_MONSTER:
    return {}
  default:
    return {}
  }
}
