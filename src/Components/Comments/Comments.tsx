import React from "react";
import styles from "../Comments/Comments.module.css";

interface CommentsProps {
  comment: string;
}

export const Comments: React.FC<CommentsProps> = ({ comment }) => {
  const date = new Date().toLocaleDateString();

  return (
    <div className={`${styles["comm-cont"]}`}>
      <p className={`${styles["date"]}`}>{date}</p>
      <p>{comment}</p>
    </div>
  );
};
