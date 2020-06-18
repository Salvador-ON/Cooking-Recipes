export const addRecipes = value => ({
  type: 'ADD_RECIPES',
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

