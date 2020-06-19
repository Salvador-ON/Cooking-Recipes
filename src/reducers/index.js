import { combineReducers } from 'redux';
import recipes from './recipes';
import favorites from './favorites';
import savedRecipes from './savedRecipes';
import filter from './filter';

const allReducers = combineReducers({
  recipes,
  favorites,
  savedRecipes,
  filter,
});

export default allReducers;
