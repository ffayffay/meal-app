import React from "react";
import styles from "../Star/Star.module.css";
import { Recipe } from "../../Types";

interface StarProps {
  numb: number;
  changeRating: (numb: number) => void;
  rating: number;
  recipeToDisplay: Recipe;
}

export const Star: React.FC<StarProps> = ({
  numb,
  changeRating,
  rating,
  recipeToDisplay,
}) => {
  return (
    <div>
      <button
        className={numb <= recipeToDisplay.rating ? `${styles["fill"]}` : ""}
        onClick={() => changeRating(numb)}
      >
        {numb}
      </button>
    </div>
  );
};
