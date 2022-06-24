import React, { useState } from "react";
import styles from ".././Heart/Heart.module.css";
import { Recipe } from "../../Types";

interface HeartProps {
  recipeToDisplay: Recipe;
  updateRecList: (rec: Recipe) => void;
}

export const Heart: React.FC<HeartProps> = ({
  recipeToDisplay,
  updateRecList,
}) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(
    recipeToDisplay.isFavorite
  );

  const toggleFavorite = () => {
    setIsFavorited((prev) => {
      recipeToDisplay.isFavorite = !prev;
      updateRecList(recipeToDisplay);
      return !prev;
    });
    // setIsFavorited(!isFavorited);
    // recipeToDisplay.isFavorite = !isFavorited;
    // updateRecList(recipeToDisplay);
  };

  return (
    <div
      className={`${styles["heart-shape"]} ${
        isFavorited && recipeToDisplay.isFavorite === true
          ? `${styles["is-favorited"]}`
          : ""
      }`}
      onClick={() => toggleFavorite()}
    ></div>
  );
};
