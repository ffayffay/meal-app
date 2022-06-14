import React from "react";
import { reduceEachLeadingCommentRange } from "typescript";
import { Recipe } from "../../Types";

interface NewRecipeFormProps {
  recipeUrl: string;
  setRecipeUrl: (string: string) => void;
  setAllRecipes: (recipe: Recipe[]) => void;
  allRecipes: Recipe[];
}

export const NewRecipeForm: React.FC<NewRecipeFormProps> = ({
  recipeUrl,
  setRecipeUrl,
  setAllRecipes,
  allRecipes,
}) => {
  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const recipeScraper = {
    scrape: async (recipe: string) => {
      const response = await fetch(
        "https://a196-184-59-65-235.ngrok.io/scrapeRecipe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipe: recipe }),
        }
      );
      return response.json();
    },
  };

  function scrapeRecipe() {
    const url = recipeUrl;
    return recipeScraper.scrape(url);
  }

  const updateAllRecipes = () => {
    scrapeRecipe().then((recipe: Recipe) => {
      recipe.id = uuidv4();
      setAllRecipes([...allRecipes, recipe]);
    });
    setRecipeUrl("");
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setRecipeUrl(e.target.value);
  };

  return (
    <div>
      <h2>Add New Recipe:</h2>
      <input
        onChange={(e) => handleChange(e)}
        value={recipeUrl}
        type="text"
        placeholder="Recipe URL"
      />
      <button onClick={updateAllRecipes}>Submit</button>
    </div>
  );
};
