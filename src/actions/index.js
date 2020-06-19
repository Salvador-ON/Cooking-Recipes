export const addRecipes = value => ({
  type: 'ADD_RECIPES',
  payload: value,
});

export const removeRecipes = value => ({
  type: 'REMOVE_RECIPES',
  payload: value,
});

export const erraseRecipes = () => ({
  type: 'ERRASE_RECIPES'
});

export const changeStateFavs = (value) => ({
  type: 'CHANGE_STATE',
  payload: value,
});

export const addSavedRecipes = value => ({
  type: 'ADD_SAVED_RECIPES',
  payload: value,
});

export const removeSavedRecipes = value => ({
  type: 'REMOVE_SAVED_RECIPES',
  payload: value,
});

export const changeFilter = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});


