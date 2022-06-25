import React from "react";

interface CommentsInputProps {
  handleClick: () => void;
}

export const CommentsInput: React.FC<CommentsInputProps> = ({
  handleClick,
}) => {
  return (
    <div>
      <textarea name="comment" id="" cols={30} rows={10}></textarea>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};
