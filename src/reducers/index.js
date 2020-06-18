import { combineReducers } from 'redux';
import recipes from './recipes';
import favorites from './favorites';
import savedRecipes from './savedRecipes'


const allReducers = combineReducers({
  recipes,
  favorites,
  savedRecipes,
});

export default allReducers;