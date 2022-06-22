import React from "react";
import styles from "../Star/Star.module.css";

interface StarProps {
  numb: number;
  changeRating: (numb: number) => void;
  rating: number;
}

export const Star: React.FC<StarProps> = ({ numb, changeRating, rating }) => {
  return (
    <div>
      <button
        className={numb <= rating ? `${styles["fill"]}` : ""}
        onClick={() => changeRating(numb)}
      >
        {numb}
      </button>
    </div>
  );
};
