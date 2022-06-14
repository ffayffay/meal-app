import React from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  navigate: (newRoute: number) => void;
  currentRoute: number;
  searchCriteria: string;
  setSearchCriteria: (r: string) => void;
  searchRecipes: any;
}

export const NavBar: React.FC<NavBarProps> = ({
  navigate,
  currentRoute,
  searchCriteria,
  setSearchCriteria,
  searchRecipes,
}) => {
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
      <span className={`${styles["menu-item"]}`} onClick={() => handleClick(4)}>
        <h4>Shopping List</h4>
      </span>
      <span className={`${styles["menu-item"]}`} onClick={() => handleClick(3)}>
        <h4>Meal Planner</h4>
      </span>
      <span className={`${styles["menu-item"]} ${styles["search-cont"]}`}>
        <span>
          <input
            type="text"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          />
        </span>
        <button onClick={searchRecipes}>Search</button>
      </span>
    </div>
  );
};
