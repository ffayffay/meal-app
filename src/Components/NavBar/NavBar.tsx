import React from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  navigate: (newRoute: number) => void;
  currentRoute: number;
}

export const NavBar: React.FC<NavBarProps> = ({ navigate, currentRoute }) => {
  const handleClick = (newRoute: number) => {
    navigate(newRoute);
  };

  return (
    <div className={`${styles["menu-cont"]}`}>
      {currentRoute === 0 ? (
        ""
      ) : (
        <span
          className={`${styles["menu-item"]}`}
          onClick={() => handleClick(0)}
        >
          <h4>Home</h4>
        </span>
      )}

      <span className={`${styles["menu-item"]}`} onClick={() => handleClick(2)}>
        <h4>Add Recipe</h4>
      </span>
      <span className={`${styles["menu-item"]}`}>
        <h4>Shopping List</h4>
      </span>
      <span className={`${styles["menu-item"]}`}>
        <h4>Meal Planner</h4>
      </span>
      <span className={`${styles["menu-item"]} ${styles["search-cont"]}`}>
        <span>
          <input type="text" />
        </span>
        <button>Search</button>
      </span>
    </div>
  );
};
