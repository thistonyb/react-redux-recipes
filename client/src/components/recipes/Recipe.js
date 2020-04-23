import React from "react";
import { NavLink } from "react-router-dom";
import "./Recipe.css";

const Recipe = (props) => {
  const { recipe } = props;
  const ingredients = recipe.ingredients
    .split(",")
    .map((ingredient) => <li>{ingredient}</li>);
  return (
    <div className="recipePage">
      <div className="recipe">
        <h1>{recipe.name}</h1>
        <img alt="treasure chest" src="https://i.imgur.com/ldUxcEN.gif" />
        <br />
        <NavLink to={"/recipes"}>Back to Search</NavLink>
        <br />
        <br />
        <span>{`Prep Time: ${recipe.preptime / 60} minutes`}</span>
        <br />
        <span>{`Wait Time: ${recipe.waittime / 60} minutes`}</span>
        <br />
        <span>{`Cook Time: ${recipe.cooktime / 60} minutes`}</span>
        <br />
        <span>{`Servings: ${recipe.servings}`}</span>
        <br />
        <span>{`Comments: ${recipe.comments}`}</span>
        <br />
        <span>{`Calories: ${recipe.calories}`}</span>
        <br />
        <span>{`Fat: ${recipe.fat} g`}</span>
        <br />
        <span>{`Sat Fat: ${recipe.satfat} g`}</span>
        <br />
        <span>{`Carbs: ${recipe.carbs} g`}</span>
        <br />
        <span>{`Fiber: ${recipe.fiber} g`}</span>
        <br />
        <span>{`Sugar: ${recipe.sugar} g`}</span>
        <br />
        <span>{`Protein: ${recipe.protein} g`}</span>
        <h2>Instructions:</h2>
        <p>{recipe.instructions}</p>
        <h2>Ingredients:</h2>
        <ul>{ingredients}</ul>
        <h3>Tags:</h3>
        <p>
          {recipe.tags
            .split(",")
            .filter((tag) => tag !== "FUF")
            .join(", ")}
        </p>
        <br />
        <NavLink to={`/recipes/${recipe.id}/reviews`}>Reviews</NavLink>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Recipe;
