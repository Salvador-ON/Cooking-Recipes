const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPES':
      return action.payload;
    case 'ERRASE_RECIPES':
      return [];
    case 'REMOVE_RECIPES':
      return state.filter(recipe => recipe.recipe.calories !== action.payload);
    default:
      return state;
  }
};

export default recipes;