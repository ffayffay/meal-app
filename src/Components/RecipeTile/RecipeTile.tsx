import React from 'react';
import { Recipe } from '../../Types';
import styles from './RecipeTile.module.css'

interface RecipeTileProps {
  rec: Recipe;
}

export const RecipeTile: React.FC<RecipeTileProps> = ({ rec }) => {
  return (
    <div className={`${styles["tile"]}`}>
      <div className={`${styles["tile-img"]}`}>
        <img src={rec.images[0]} alt="Food" />
      </div>
      <div>
        <h3>{rec.name}</h3>
        <p>{rec.description}</p>
      </div>
    </div>
  )
}