const favRecipes = localStorage.getItem('favs')
  ? JSON.parse(localStorage.getItem('favs'))
  : [];

const savedRecipes = (state = (favRecipes || []), action) => {
  switch (action.type) {
    case 'ADD_SAVED_RECIPES':
      return [...state, action.payload];
    case 'ERRASE_SAVED_RECIPES':
      return [];
    case 'REMOVE_SAVED_RECIPES':
      return state.filter(recipe => recipe.recipe.calories !== action.payload);
    default:
      return state;
  }
};

export default savedRecipes;
