import React, { useState } from "react";
import styles from "./StarRating.module.css";
import { Star } from "../Star/Star";

export const StarRating = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating: number) => {
    setRating(newRating);
    console.log("RATING", newRating);
  };

  // possibly use a useEffect to watch for when rating changes and update what "stars" are filled in to show the rating
  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <div className={`${styles["star-cont"]}`}>
      {ratingArray.map((numb: number, idx) => (
        <Star numb={numb} key={idx + 1} changeRating={changeRating} />
      ))}
    </div>
  );
};
