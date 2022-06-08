import React from "react";
import '../LogInStyles.css';

export const LogIn = () => {
  return (
    <div>
      <span>
        <label htmlFor="user">Username:</label>
      </span>
      <span>
        <input type="text" />
      </span>
      <span>
        <label htmlFor="password">Password:</label>
      </span>
      <span>
        <input type="text" />
      </span>
      <button>Submit</button>
      <span>
        <p>Sign Up</p>
      </span>
    </div>
  );
};
