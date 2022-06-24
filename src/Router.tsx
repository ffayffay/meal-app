import React from "react";
import { Recipe, Ing } from "./Types";
import { RecipeTile } from "./Components/RecipeTile/RecipeTile";
import { RecipeCard } from "./Components/RecipeCard/RecipeCard";
import { NewRecipeForm } from "./Components/NewRecipeForm/NewRecipeForm";
import { MealPlan } from "./Components/MealPlan/MealPlan";
import { ShopList } from "./Components/ShopList/ShopList";

interface RouterProps {
  allRecipes: Recipe[];
  currentRoute: number;
  displayRecipe: (name: string) => void;
  recipeToDisplay: Recipe;
  recipeUrl: string;
  setRecipeUrl: (string: string) => void;
  setAllRecipes: (recipe: Recipe[]) => void;
  getIngredients: (array: Ing[]) => void;
  shopList: Ing[];
  deleteIng: (idToDel: Ing) => void;
  updateRecList: (rec: Recipe) => void;
}

export const Router: React.FC<RouterProps> = ({
  allRecipes,
  currentRoute,
  displayRecipe,
  recipeToDisplay,
  recipeUrl,
  setRecipeUrl,
  setAllRecipes,
  getIngredients,
  shopList,
  deleteIng,
  updateRecList,
}) => {
  switch (currentRoute) {
    case 0:
      return (
        <div className="tile-wrap">
          {allRecipes.length === 0 ? (
            <h2>No Recipes</h2>
          ) : (
            allRecipes.map((rec: Recipe, idx) => (
              <RecipeTile
                rec={rec}
                key={idx + 1}
                displayRecipe={displayRecipe}
              />
            ))
          )}
        </div>
      );
    case 1:
      return (
        <RecipeCard
          recipeToDisplay={recipeToDisplay}
          getIngredients={getIngredients}
          updateRecList={updateRecList}
        />
      );
    case 2:
      return (
        <NewRecipeForm
          recipeUrl={recipeUrl}
          setRecipeUrl={(string: string) => setRecipeUrl(string)}
          setAllRecipes={(recipe: Recipe[]) => setAllRecipes(recipe)}
          allRecipes={allRecipes}
        />
      );
    case 3:
      return <MealPlan allRecipes={allRecipes} displayRecipe={displayRecipe} />;
    case 4:
      return <ShopList shopList={shopList} deleteIng={deleteIng} />;
    default:
      return <></>;
  }
};
