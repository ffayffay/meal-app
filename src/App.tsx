import React, { useState, useEffect } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Router } from "./Router";
import "./App.css";
import { Recipe, Ing } from "./Types";
import { MockData } from "./MockData";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeUrl, setRecipeUrl] = useState<string>("");
  // const [recipe, setRecipe] = useState<Recipe>();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [currentRoute, setCurrentRoute] = useState(0);
  const [recipeToDisplay, setRecipeToDisplay] = useState<Recipe>({} as Recipe);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [filreredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [shopList, setShopList] = useState<Ing[]>([]);

  const displayRecipe = (name: string) => {
    const clickedRecipeId = name;
    const foundRecipe = allRecipes.find((r) => r.name === clickedRecipeId);
    console.log("clicked id", clickedRecipeId, "found id", foundRecipe);
    if (foundRecipe) {
      setRecipeToDisplay(foundRecipe);
    }
    setCurrentRoute(1);
  };

  const searchRecipes = () => {
    if (searchCriteria === "") {
      setFilteredRecipes(allRecipes);
      return;
    }
    const foundRecipes = allRecipes.filter((r) =>
      r.name.toLowerCase().includes(searchCriteria)
    );
    console.log("found recipe to match search", foundRecipes);
    setFilteredRecipes(foundRecipes);
  };

  const getIngredients = (array: Ing[]) => {
    const ings = [...shopList, ...array];
    console.log("adding to list", ings);
    setShopList(ings);
  };

  const deleteIng = (idToDel: Ing) => {
    console.log("got ing id", idToDel);
    const newShopList = shopList.filter((i) => i !== idToDel);
    setShopList(newShopList);
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

  return (
    <div className="App">
      <header>
        <NavBar
          navigate={(newRoute: number) => setCurrentRoute(newRoute)}
          currentRoute={currentRoute}
          searchCriteria={searchCriteria}
          setSearchCriteria={setSearchCriteria}
          searchRecipes={searchRecipes}
        />
      </header>
      <div className="main-cont">
        <Router
          allRecipes={allRecipes.filter((r) =>
            r.name.toLowerCase().includes(searchCriteria.toLowerCase())
          )}
          currentRoute={currentRoute}
          displayRecipe={displayRecipe}
          recipeToDisplay={recipeToDisplay}
          recipeUrl={recipeUrl}
          setRecipeUrl={(string: string) => setRecipeUrl(string)}
          setAllRecipes={(recipe: Recipe[]) => setAllRecipes(recipe)}
          getIngredients={getIngredients}
          shopList={shopList}
          deleteIng={(idTodel: Ing) => deleteIng(idTodel)}
        />
      </div>
    </div>
  );
};

export default App;
