import recipes from '../reducers/recipes';
import favorites from '../reducers/favorites';
import savedRecipes from '../reducers/savedRecipes';
import filter from '../reducers/filter';

import * as actions from '../actions/index.js'

describe('actions', () => {
  it('should modify recipes state add recipe', () => {
    const recipesState = [{recipe: {
      calories: '134',
      title: 'recipe1'
    }}, 
    
    {recipe: {
      calories: '234',
      title: 'recipe2'
    }}];
    const expectedAction = recipesState
    expect(recipes([],actions.addRecipes((recipesState)))).toMatchObject(expectedAction)
  });

  it('should modify recipes state remove recipe', () => {
    const recipesState = [{recipe: {
      calories: '134',
      title: 'recipe1'
    }}, 
    
    {recipe: {
      calories: '234',
      title: 'recipe2'
    }}];
    
    const expectedAction = [{recipe: {
      calories: '134',
      title: 'recipe1'
    }}]
    
    expect(recipes(recipesState,actions.removeRecipes('234'))).toEqual(expectedAction)
  });

  it('should modify recipes state errase recipes', () => {
    const recipesState = [{recipe: {
      calories: '134',
      title: 'recipe1'
    }}, 
    
    {recipe: {
      calories: '234',
      title: 'recipe2'
    }}];
  
    expect(recipes(recipesState, actions.erraseRecipes())).toEqual([])
  });

  it('should modify favorites state', () => {
    const favState = false;
    expect(favorites(favState, actions.changeStateFavs(true))).toBe(true)
  });

  it('should modify favorites state', () => {
    const favState = false;
    expect(favorites(favState, actions.changeStateFavs(false))).toBe(false)
  });

  it('should add a saved recipe', () => {
    const recipesState = {recipe: {
      calories: '134',
      title: 'recipe1'
    }};

    const expectedAction = recipesState
    expect(savedRecipes([], actions.addSavedRecipes(recipesState))).toEqual([expectedAction])
  });

  it('should add a saved recipe', () => {
    const filterState = '';
    expect(filter(filterState, actions.changeFilter('1000'))).toEqual('1000')
  });

  it('should add a saved recipe', () => {
    const filterState = '1000';
    expect(filter(filterState, actions.changeFilter('All'))).toEqual('')
  });

 

  // it('should create an action to change filte', () => {
  //   const text = 'CHANGE_FILTER'
  //   const expectedAction = {
  //     type: text,
  //     payload: '1000'
  //   }
  //   expect(actions.changeFilter(('1000'))).toEqual(expectedAction)
  // });
})