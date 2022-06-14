import React from "react";
import styles from "../ShopList/ShopList.module.css";
import { Ing } from "../../Types";
import { ShopListItem } from "../ShopListItem/ShopListItem";

interface ShopListProps {
  shopList: Ing[];
  deleteIng: (idToDel: Ing) => void;
}

export const ShopList: React.FC<ShopListProps> = ({ shopList, deleteIng }) => {
  return (
    <div className={`${styles["list-cont"]}`}>
      <span>
        <h2>Shopping List:</h2>
      </span>
      <div>
        <ul>
          {shopList.map((ing: Ing, idx: number) => (
            <ShopListItem key={idx + 1} ing={ing} deleteIng={deleteIng} />
          ))}
        </ul>
      </div>
    </div>
  );
};
