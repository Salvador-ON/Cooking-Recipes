import React from 'react';
import Landing from './Landing';
import Waiting from './Waiting';
import NavBar from './Navbar';
import Recipes from '../containers/Recipes';

function App() {
  const favRecipes = localStorage.getItem('favs')
    ? JSON.parse(localStorage.getItem('favs'))
    : [];

  const [savedRecipes, useSavedRecipes] = React.useState(favRecipes);
  const [welcome, useWelcome] = React.useState(true);
  const [dataQuery, useDataQuery] = React.useState('');
  const [searching, useSearching] = React.useState(false);
  const [recipes, useRecipes] = React.useState([]);
  const [favorites, useFavorites] = React.useState(false);
  const [invalidQuery, useInvalidQuery] = React.useState(false);

  const SetFavorites = value => {
    useFavorites(value);
  };

  const SetData = data => {
    useDataQuery(data);
  };

  const SetSearching = data => {
    useSearching(data);
  };

  const SetWelcome = data => {
    useWelcome(data);
  };

  const SetRecipes = data => {
    useRecipes(data);
  };

  const SetRecipesLikes = value => {
    const recipesAfterLike = recipes.filter(recipe => recipe.recipe.calories !== value);
    SetRecipes(recipesAfterLike);
  };

  const SetFav = dataRecipe => {
    useSavedRecipes([...savedRecipes, dataRecipe]);
    SetRecipesLikes(dataRecipe.recipe.calories);
  };

  const SetReset = () => {
    SetSearching(false);
    SetData('');
    SetWelcome(true);
    SetRecipes([]);
    SetFavorites(false);
  };

  const SetInvalid = value => {
    useInvalidQuery(value);
    if (value) {
      SetReset();
    }
  };

  const DeleteRecipe = value => {
    const newSavedRecipes = savedRecipes.filter(recipe => recipe.recipe.calories !== value);
    useSavedRecipes(newSavedRecipes);
  };

  React.useEffect(() => {
    if (favRecipes) {
      localStorage.setItem('favs', JSON.stringify(savedRecipes));
    } else {
      localStorage.setItem('favs', JSON.stringify([]));
    }
  }, [savedRecipes, favRecipes]);

  return (
    <>
      <NavBar SetReset={SetReset} SetFavorites={SetFavorites} />
      {welcome && !favorites ? (
        <Landing
          SetData={SetData}
          SetSearching={SetSearching}
          SetWelcome={SetWelcome}
          SetRecipes={SetRecipes}
          SetInvalid={SetInvalid}
          invalidQuery={invalidQuery}
        />
      ) : null}
      {searching && recipes.length === 0 ? (<Waiting dataQuery={dataQuery} />) : null}
      {recipes.length > 0 && !favorites ? (
        <Recipes
          recipes={recipes}
          SetFav={SetFav}
          favorites={favorites}
          DeleteRecipe={DeleteRecipe}
        />
      ) : null}
      {favorites ? (
        <Recipes
          recipes={savedRecipes}
          SetFav={SetFav}
          favorites={favorites}
          DeleteRecipe={DeleteRecipe}
        />
      ) : null}
    </>
  );
}

export default App;
