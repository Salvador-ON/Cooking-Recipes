import * as actions from '../actions/index';

describe('actions', () => {
  it('should create an action to add recipe', () => {
    const text = 'ADD_RECIPES';
    const expectedAction = {
      type: text,
      payload: 'recipe',
    };
    expect(actions.addRecipes(('recipe'))).toEqual(expectedAction);
  });

  it('should create an action to remove recipe', () => {
    const text = 'REMOVE_RECIPES';
    const expectedAction = {
      type: text,
      payload: 'id',
    };
    expect(actions.removeRecipes(('id'))).toEqual(expectedAction);
  });

  it('should create an action to errase recipes', () => {
    const text = 'ERRASE_RECIPES';
    const expectedAction = {
      type: text,
    };
    expect(actions.erraseRecipes()).toEqual(expectedAction);
  });

  it('should create an action to change Favorites state', () => {
    const text = 'CHANGE_STATE';
    const expectedAction = {
      type: text,
      payload: true,
    };
    expect(actions.changeStateFavs((true))).toEqual(expectedAction);
  });

  it('should create an action to add a saved recipe', () => {
    const text = 'ADD_SAVED_RECIPES';
    const expectedAction = {
      type: text,
      payload: 'recipe',
    };
    expect(actions.addSavedRecipes(('recipe'))).toEqual(expectedAction);
  });

  it('should create an action to change filte', () => {
    const text = 'CHANGE_FILTER';
    const expectedAction = {
      type: text,
      payload: '1000',
    };
    expect(actions.changeFilter(('1000'))).toEqual(expectedAction);
  });
});
