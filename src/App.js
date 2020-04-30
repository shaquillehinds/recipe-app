import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes(query);
  }, [query]);

  const getRecipes = async (recipe = "chicken") => {
    if (recipe) {
      const response = await fetch(
        `https://api.edamam.com/search?q=${recipe}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="app-title">Recipe Search App</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button">FIND RECIPE</button>
      </form>
      <div className="recipe-wrapper">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.recipe.uri.split("_")[1]}
              title={recipe.recipe.label}
              calories={Math.round(recipe.recipe.calories)}
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
              url={recipe.recipe.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
