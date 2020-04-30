import React from "react";
import "./recipe.css";

const Recipe = ({ title, calories, img, ingredients = [], url }) => {
  return (
    <div className="recipe">
      <img className="recipe__img" src={img} alt={title} />
      <h2 className="recipe__title">{title}</h2>
      <p className="recipe__calories">
        Calories
        <strong> {calories}</strong>
      </p>
      <ol className="recipe__ingredients">
        {ingredients.map((ingredient) => {
          return (
            <li key={title + ingredient} className="recipe__ingredient">
              {ingredient}
            </li>
          );
        })}
      </ol>
      <a className="read-more" href={url} target="_blank">
        <button className="read-more-btn">Read More</button>
      </a>
    </div>
  );
};

export default Recipe;
