import React from "react";
import "./Comment.css";

const Comment = props => {
  return (
    <div>
      <span>{props.comment.username}</span>
      <span>{props.comment.text}</span>
      <input type="text" placeholder="add comment..." />
    </div>
  );
};

export default Comment;
