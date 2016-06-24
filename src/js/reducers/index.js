import { combineReducers } from 'redux';
import monsterFinder from './monsterFinder';
import moveFinder from './moveFinder';

const rootReducer = combineReducers({
  monsterFinder,
  moveFinder
});

export default rootReducer;
