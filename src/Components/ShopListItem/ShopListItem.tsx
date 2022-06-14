import React from "react";
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
    <div id={ing.id}>
      <li>{ing.name}</li>
      <button>Edit</button>
      <button onClick={() => deleteIng(ing)}>Delete</button>
    </div>
  );
};
