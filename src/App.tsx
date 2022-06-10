import React, { useState, useEffect } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { NewRecipeForm } from "./Components/NewRecipeForm/NewRecipeForm";
import { RecipeTile } from "./Components/RecipeTile/RecipeTile";
import { Router } from "./Router";
import "./App.css";
import { Recipe } from "./Types";
import { MockData } from "./MockData";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeUrl, setRecipeUrl] = useState<string>("");
  // const [recipe, setRecipe] = useState<Recipe>();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [currentRoute, setCurrentRoute] = useState(0);
  const [recipeToDisplay, setRecipeToDisplay] = useState<Recipe>({} as Recipe);

  const displayRecipe = (name: string) => {
    const clickedRecipeId = name;
    const foundRecipe = allRecipes.find((r) => r.name === clickedRecipeId);
    console.log("clicked id", clickedRecipeId, "found id", foundRecipe);
    if (foundRecipe) {
      setRecipeToDisplay(foundRecipe);
    }
    setCurrentRoute(1);
  };

  useEffect(() => {
    if (!isLoaded) {
      // get stuff out of local storage
      // and set it.

      if (allRecipes.length === 0) {
        setAllRecipes(MockData);
      }
      setIsLoaded(true);
    }
  }, [isLoaded, allRecipes]);

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
        <NavBar
          navigate={(newRoute: number) => setCurrentRoute(newRoute)}
          currentRoute={currentRoute}
        />
      </header>
      <div className="main-cont">
        <Router
          allRecipes={allRecipes}
          currentRoute={currentRoute}
          displayRecipe={displayRecipe}
          recipeToDisplay={recipeToDisplay}
          recipeUrl={recipeUrl}
          setRecipeUrl={(string: string) => setRecipeUrl(string)}
          setAllRecipes={(recipe: Recipe[]) => setAllRecipes(recipe)}
        />
      </div>
    </div>
  );
};

export default App;
