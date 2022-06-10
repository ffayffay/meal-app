import React from "react";
import { Recipe } from "./Types";
import { RecipeTile } from "./Components/RecipeTile/RecipeTile";
import { RecipeCard } from "./Components/RecipeCard/RecipeCard";
import { NewRecipeForm } from "./Components/NewRecipeForm/NewRecipeForm";

interface RouterProps {
  allRecipes: Recipe[];
  currentRoute: number;
  displayRecipe: (name: string) => void;
  recipeToDisplay: Recipe;
  recipeUrl: string;
  setRecipeUrl: (string: string) => void;
  setAllRecipes: (recipe: Recipe[]) => void;
}

export const Router: React.FC<RouterProps> = ({
  allRecipes,
  currentRoute,
  displayRecipe,
  recipeToDisplay,
  recipeUrl,
  setRecipeUrl,
  setAllRecipes,
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
      return <RecipeCard recipeToDisplay={recipeToDisplay} />;
    case 2:
      return (
        <NewRecipeForm
          recipeUrl={recipeUrl}
          setRecipeUrl={(string: string) => setRecipeUrl(string)}
          setAllRecipes={(recipe: Recipe[]) => setAllRecipes(recipe)}
          allRecipes={allRecipes}
        />
      );
    default:
      return <></>;
  }
};
