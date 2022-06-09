import React from "react";
import { Recipe } from "../../Types";

interface RecipeCardProps {
  rec: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ rec }) => {
  return (
    <div>
      <div>
        <img src={rec.images[1]} alt="Food" />
      </div>
      <div>{rec.description}</div>
      <div>
        <div>Serving Size: {rec.nutrition.servingSize}</div>
        <div>Calories: {rec.nutrition.calories}</div>
        <div>Carbohydrates: "{rec.nutrition.carbohydrateContent}</div>
        <div>Fat: {rec.nutrition.fatContent}</div>
        <div>Fiber: {rec.nutrition.fiberContent}</div>
        <div>Protien: {rec.nutrition.proteinContent}</div>
        <div>Sodium: {rec.nutrition.sodiumContent}</div>
      </div>
      <div>
        <div>Total Servings: {rec.servings}</div>
        <div>
          <span>Prep: {rec.times.prep}</span>
          <span>Cook: {rec.times.cook}</span>
          <span>Total: {rec.times.total}</span>
        </div>
      </div>
      <div>
        <ul>
          {rec.ingredients.map((ing, idx) => <li key={idx + 1}>{ing}</li>)}
        </ul>
      </div>
      <div>
        <ol>
          {rec.instructions.map((step, idx) => <li key={idx + 1}>{step}</li>)}
        </ol>
      </div>
    </div>
  );
};
