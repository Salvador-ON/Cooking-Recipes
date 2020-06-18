import React from "react";
import Recipe from "../components/Recipe";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

const Recipes = ({DeleteRecipe }) => {
  const recipes = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);
  const savedRecipes = useSelector(state => state.savedRecipes);

  return (
    <div className="container repCont">
      <div className="row d-flex justify-content-between">
        {(favorites ? savedRecipes : recipes ).map((recipe) => (
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
            DeleteRecipe={DeleteRecipe}
          />
        ))}
      </div>
    </div>
  );
};


Recipes.propTypes = {
  DeleteRecipe: PropTypes.func.isRequired,
};


export default Recipes;
