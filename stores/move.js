import { CHOOSE, RESET } from '../constants/ActionTypes';

export default function move(state = [], action) {
  switch (action.type) {
  case CHOOSE:
    return state.concat(action.data);
  case RESET:
    return [];
  default:
    return state;
  }
}
