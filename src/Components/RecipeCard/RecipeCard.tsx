import React from "react";
import { Recipe } from "../../Types";

interface RecipeCardProps {
  recipeToDisplay: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipeToDisplay }) => {
  return (
    <div>
      <div>
        <img src={recipeToDisplay.images[1]} alt="Food" />
      </div>
      <div>{recipeToDisplay.description}</div>
      <div>
        <div>Serving Size: {recipeToDisplay.nutrition.servingSize}</div>
        <div>Calories: {recipeToDisplay.nutrition.calories}</div>
        <div>Carbohydrates: "{recipeToDisplay.nutrition.carbohydrateContent}</div>
        <div>Fat: {recipeToDisplay.nutrition.fatContent}</div>
        <div>Fiber: {recipeToDisplay.nutrition.fiberContent}</div>
        <div>Protien: {recipeToDisplay.nutrition.proteinContent}</div>
        <div>Sodium: {recipeToDisplay.nutrition.sodiumContent}</div>
      </div>
      <div>
        <div>Total Servings: {recipeToDisplay.servings}</div>
        <div>
          <span>Prep: {recipeToDisplay.times.prep}</span>
          <span>Cook: {recipeToDisplay.times.cook}</span>
          <span>Total: {recipeToDisplay.times.total}</span>
        </div>
      </div>
      <div>
        <ul>
          {recipeToDisplay.ingredients.map((ing, idx) => <li key={idx + 1}>{ing}</li>)}
        </ul>
      </div>
      <div>
        <ol>
          {recipeToDisplay.instructions.map((step, idx) => <li key={idx + 1}>{step}</li>)}
        </ol>
      </div>
    </div>
  );
};
