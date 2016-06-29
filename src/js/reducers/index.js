import { combineReducers } from 'redux';
import monsterFinder from './monsterFinder';
import monsterMaker from './monsterMaker';
import moveFinder from './moveFinder';

const rootReducer = combineReducers({
  monsterFinder,
  monsterMaker,
  moveFinder
});

export default rootReducer;
