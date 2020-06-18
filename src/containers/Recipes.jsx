import React from "react";
import Recipe from "../components/Recipe";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

const Recipes = ({DeleteRecipe }) => {
  const recipes = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);
  return (
    <div className="container repCont">
      <div className="row d-flex justify-content-between">
        {recipes.map((recipe) => (
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
  favorites: PropTypes.bool.isRequired,
  DeleteRecipe: PropTypes.func.isRequired,
};


export default Recipes;
