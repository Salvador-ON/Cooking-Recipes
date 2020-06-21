import React from "react";
import Recipe from "../components/Recipe";
import Filter from "../components/Filter";
import { useSelector } from 'react-redux'

const Recipes = () => {
  const recipes = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);
  const savedRecipes = useSelector(state => state.savedRecipes);
  const filterCategory = useSelector(state => state.filter);

  const filterByCategory = () => {
    const recipesToFilter = (favorites ? savedRecipes : recipes )
    switch (filterCategory) {
      case '':
        return recipesToFilter;
      case '1000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= filterCategory);
      case '2000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= filterCategory);
      case '3000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= filterCategory);
      case '4000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= filterCategory);
      case '5000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= filterCategory);
      case '6000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= 5000);
      case '7000':
        return recipesToFilter.filter(recipe => recipe.recipe.calories <= 5000);
      default:
        return recipesToFilter;
    }
  };
  

  return (
    <div className="container repCont pt-2">
      {savedRecipes.length === 0 && favorites ? <h1 data-testid="NoRecipes" className="text-white">You don't have any recipes saved! </h1> :null}

      <Filter />

      <div className="row d-flex flex-column flex-md-row justify-content-md-between justify-content-center">
        {filterByCategory().map((recipe) => (
          <Recipe
            key={
              String(recipe.recipe.label) +
              "" +
              String(Math.trunc(recipe.recipe.calories))
            }
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            ingredients={recipe.recipe.ingredients}
            recipe={recipe}
            favorites={favorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
