import React, { useState } from "react";

interface CommentsInputProps {
  handleClick: () => void;
  setComment: (e: any) => void;
  updateComments: () => void;
}

export const CommentsInput: React.FC<CommentsInputProps> = ({
  handleClick,
  setComment,
  updateComments,
}) => {
  const handleChange = (e: React.ChangeEvent<any>) => {
    setComment(e.target.value);
  };

  const save = () => {
    handleClick();
    updateComments();
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleChange(e)}
        name="comment"
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <button onClick={save}>Save</button>
    </div>
  );
};

// put this in a form so that you can save on submit instead of using handle change
