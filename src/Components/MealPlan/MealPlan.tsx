import React, { useState } from 'react';
import { Recipe } from "../../Types";
import { RecipeTile } from '../RecipeTile/RecipeTile';

interface MealPlanProps {
  allRecipes: Recipe[];
  displayRecipe: (name: string) => void;
}

export const MealPlan: React.FC<MealPlanProps> = ({ allRecipes, displayRecipe }) => {

  const [mealsArray, setMealsArray] = useState<Recipe[]>([]);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const get5Meals = () => {
    debugger
    let meals = [];

    for(let i = 0; meals.length < 5; i++) {
      let index = getRandomInt(10);
      let meal = allRecipes[index]
      meals.push(meal)
    }
    console.log("meals array", meals)
    setMealsArray(meals)
  }

  return (
    <div>
      <button onClick={() => get5Meals()}>Choose 5 Random Recipes</button>

      <div className="tile-wrap">
          {mealsArray.length === 0 ? (
            <h2>No Meal Plan</h2>
          ) : (
            mealsArray.map((rec: Recipe, idx) => (
              <RecipeTile
                rec={rec}
                key={idx + 1}
                displayRecipe={displayRecipe}
              />
            ))
          )}
        </div>
    </div>
  )
}