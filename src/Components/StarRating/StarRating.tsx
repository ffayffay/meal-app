import React, { useState } from "react";
import styles from "./StarRating.module.css";
import { Recipe } from "../../Types";
import { Star } from "../Star/Star";

interface StarRatingProps {
  recipeToDisplay: Recipe;
}

export const StarRating: React.FC<StarRatingProps> = ({ recipeToDisplay }) => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating: number) => {
    setRating(newRating);
    recipeToDisplay.rating = newRating;
  };

  // possibly use a useEffect to watch for when rating changes and update what "stars" are filled in to show the rating
  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <div className={`${styles["star-cont"]}`}>
      {ratingArray.map((numb: number, idx) => (
        <Star
          numb={numb}
          key={idx + 1}
          changeRating={changeRating}
          rating={rating}
        />
      ))}
    </div>
  );
};
