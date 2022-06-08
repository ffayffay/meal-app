import React, { useState, useEffect } from "react";
import { NewRecipeForm } from "./Components/NewRecipeForm/NewRecipeForm";
import { RecipeTile } from "./Components/RecipeTile/RecipeTile";
import "./App.css";
import { Recipe } from "./Types";

export const App = () => {
  // const [currentRoute, setCurrentRoute] = useState(0);
  const [recipeUrl, setRecipeUrl] = useState<string>("");
  // const [recipe, setRecipe] = useState<Recipe>();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  // const addRecipe = (recipe: Recipe) => setAllRecipes([...allRecipes, recipe]);

  // useEffect(() => {
  //   addRecipe(recipe);
  // }, [recipe])

  // const getMealByName = () => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  //     .then((res) => res.json())
  //     .then((meal) => console.log("meal", meal));
  // };

  // const getRandomMeal = () => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  //     .then((res) => res.json())
  //     .then((meal) => console.log("random meal", meal));
  // };

  return (
    <div className="App">
      <header>
        <h1>Welcome Page</h1>
        <NewRecipeForm
          recipeUrl={recipeUrl}
          setRecipeUrl={(string: string) => setRecipeUrl(string)}
          setAllRecipes={(recipe: Recipe[]) => setAllRecipes(recipe)}
          allRecipes={allRecipes}
        />
      </header>
      <div className="main-cont">
        {allRecipes.length === 0 ? (
          <h2>No Recipes</h2>
        ) : (
          allRecipes.map((rec: Recipe, idx) => (
            <RecipeTile rec={rec} key={idx + 1} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
