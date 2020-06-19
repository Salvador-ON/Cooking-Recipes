import React from "react";
import Recipe from "../components/Recipe";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

const Recipes = ({DeleteRecipe }) => {
  const recipes = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);
  const savedRecipes = useSelector(state => state.savedRecipes);

  return (
    <div className="container repCont pt-2">
      {savedRecipes.length === 0 && favorites ? <h1 className="text-white">You don't have any recipes saved! </h1> :null}

      <div className="bg-white my-2 w-50 mx-auto border border-light rounded-pill d-flex align-items-center justify-content-center">
        <span className=" text-orange h1 m-0 p-0 d-inline">Max Calories:</span>
        <select className=" w-25 p-0 mx-3 d-inline" id="caloriesSelect">
          <option>1000</option>
          <option>2000</option>
          <option>3000</option>
          <option>4000</option>
          <option>+5000</option>
    </select>
  </div>

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
