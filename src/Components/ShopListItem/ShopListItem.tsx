import React from "react";
import styles from "../ShopListItem/ShopListItem.module.css";
import { Ing } from "../../Types";

interface ShopListItemProps {
  ing: Ing;
  deleteIng: (idToDel: Ing) => void;
}

export const ShopListItem: React.FC<ShopListItemProps> = ({
  ing,
  deleteIng,
}) => {
  return (
    <div id={ing.id} className={`${styles["list-item-cont"]}`}>
      <li>{ing.name}</li>
      <div>
        <button className={`${styles["btn"]}`}>Edit</button>
        <button className={`${styles["btn"]}`} onClick={() => deleteIng(ing)}>
          Delete
        </button>
      </div>
    </div>
  );
};
