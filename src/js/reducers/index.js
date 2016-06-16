import { combineReducers } from 'redux';
import friendList from './friendList';
import monsterFinder from './monsterFinder';

const rootReducer = combineReducers({
  friendList,
  monsterFinder
});

export default rootReducer;
