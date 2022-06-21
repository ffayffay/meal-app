import React from "react";
import { FaStar } from "react-icons/fa";
// filled, onClick props
interface StarProps {
  numb: number;
  changeRating: (numb: number) => void;
}

export const Star: React.FC<StarProps> = ({ numb, changeRating }) => {
  return (
    <div>
      <button onClick={() => changeRating(numb)}>{numb}</button>
    </div>
    // <FaStar
    //  color={filled ? "orange" : "lightgray"}
    //  onClick={onClick} />
  );
};
