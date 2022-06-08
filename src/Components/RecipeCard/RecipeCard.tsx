import React from "react";
import { Recipe } from '../../Types'

interface RecipeCardProps {
  allRecipes: [Recipe];
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ allRecipes }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>Description Goes Here</div>
      <div>
        <div>calories: "561 kcal"</div>
        <div>carbohydrateContent: "102 g"</div>
        <div>fatContent: "8 g"</div>
        <div>fiberContent: "9 g"</div>
        <div>proteinContent: "21 g"</div>
        <div>servingSize: "1 bowl"</div>
        <div>sodiumContent: "1190 mg"</div>
      </div>
      <div>
        <div>Serving</div>
        <div>prep time/cook time/total time</div>
      </div>
      <div>Ingredients</div>
      <div>Directions</div>
    </div>
  );
};
