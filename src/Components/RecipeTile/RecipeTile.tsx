import React from 'react';
import { Recipe } from '../../Types';
import styles from './RecipeTile.module.css'

interface RecipeTileProps {
  rec: Recipe;
  displayRecipe: (name: string) => void;
}

export const RecipeTile: React.FC<RecipeTileProps> = ({ rec, displayRecipe }) => {
  return (
    <div className={`${styles["tile"]}`} id={rec.name}>
      <div className={`${styles["tile-img"]}`}>
        <img src={rec.images[0]} alt="Food" />
      </div>
      <div>
        <h3 onClick={() => displayRecipe(rec.name)}>
          {rec.name}
        </h3>
        <p>{rec.description}</p>
      </div>
    </div>
  )
}