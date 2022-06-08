import React from 'react';
import { Recipe } from '../../Types'

interface NewRecipeFormProps {
  recipeUrl: string;
  setRecipeUrl: (string: string) => void;
  setAllRecipes: (recipe: Recipe[]) => void;
  allRecipes: Recipe[];
}

export const NewRecipeForm:React.FC<NewRecipeFormProps> = ({ recipeUrl, setRecipeUrl, setAllRecipes, allRecipes }) => {

  const recipeScraper = {
    scrape: async (recipe: string) => {
      const response = await fetch('https://8cc0-184-59-65-235.ngrok.io/scrapeRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ recipe: recipe})
      });
      return response.json();
    }
  };
  
  
  function scrapeRecipe() {
    const url = recipeUrl
    const recipe = recipeScraper.scrape(url)
    // .then(res => setRecipe(res));
    return recipe
  }

  const updateAllRecipes = () => {
    scrapeRecipe()
    .then((recipe: Recipe) => setAllRecipes([...allRecipes, recipe]))
    setRecipeUrl("");
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    setRecipeUrl(e.target.value);
  };
  
  return (
    <div>
      <h2>Add New Recipe:</h2>
      <input onChange={(e) => handleChange(e)} value={recipeUrl} type="text" placeholder='Recipe URL' />
      <button onClick={updateAllRecipes}>Submit</button>
    </div>
  )
}
