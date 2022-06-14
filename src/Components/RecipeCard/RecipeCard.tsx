import React from "react";
import { Recipe, Ing } from "../../Types";
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipeToDisplay: Recipe;
  getIngredients: (aray: Ing[]) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipeToDisplay,
  getIngredients,
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
  let mappedIngs: Ing[] = recipeToDisplay.ingredients.map((name) => ({
    id: uuidv4(),
    name,
    isChecked: false,
  }));
  console.log("should be obj now", mappedIngs);

  return (
    <div className={`${styles["rec-cont"]}`}>
      <div className={`${styles["img-cont"]}`}>
        <img src={recipeToDisplay.images[1]} alt="Food" />
      </div>
      <div className={`${styles["desription"]}`}>
        {recipeToDisplay.description}
      </div>
      <div className={`${styles["nutrition"]}`}>
        <div>
          <span className={`${styles["label"]}`}>Serving Size:</span>{" "}
          {recipeToDisplay.nutrition.servingSize}
        </div>
        <div>
          <span className={`${styles["label"]}`}>Calories:</span>{" "}
          {recipeToDisplay.nutrition.calories}
        </div>
        <div>
          <span className={`${styles["label"]}`}>Carbohydrates:</span>{" "}
          {recipeToDisplay.nutrition.carbohydrateContent}
        </div>
        <div>
          <span className={`${styles["label"]}`}>Fat:</span>{" "}
          {recipeToDisplay.nutrition.fatContent}
        </div>
        <div>
          <span className={`${styles["label"]}`}>Fiber:</span>{" "}
          {recipeToDisplay.nutrition.fiberContent}
        </div>
        <div>
          <span className={`${styles["label"]}`}>Protien:</span>{" "}
          {recipeToDisplay.nutrition.proteinContent}
        </div>
        <div>
          <span className={`${styles["label"]}`}>Sodium:</span>{" "}
          {recipeToDisplay.nutrition.sodiumContent}
        </div>
      </div>
      <div className={`${styles["serv-time-cont"]}`}>
        <div>
          <span className={`${styles["label"]}`}>Total Servings:</span>
          {recipeToDisplay.servings[0]}
        </div>
        <div>
          <span className={`${styles["margin-ten"]}`}>
            <span className={`${styles["label"]}`}>Prep:</span>{" "}
            {recipeToDisplay.times.prep}
          </span>
          <span className={`${styles["margin-ten"]}`}>
            <span className={`${styles["label"]}`}>Cook:</span>{" "}
            {recipeToDisplay.times.cook}
          </span>
          <span className={`${styles["margin-ten"]}`}>
            <span className={`${styles["label"]}`}>Total:</span>{" "}
            {recipeToDisplay.times.total}
          </span>
        </div>
      </div>
      <div>
        <div>
          <button onClick={() => getIngredients(mappedIngs)}>
            Add To Shopping List
          </button>
        </div>
        <ul>
          {mappedIngs.map((ing: Ing, idx) => (
            <li key={idx + 1}>{ing.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ol>
          {recipeToDisplay.instructions.map((step, idx) => (
            <li key={idx + 1}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
