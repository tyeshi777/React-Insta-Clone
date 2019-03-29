import React from "react";
import "./Comment.css";

const CommentInput = props => {
  console.log(props);
  return (
    <div>
      <form onSubmit={props.onEnter}>
        <input
          type="text"
          value={props.newComment}
          placeholder="add comment..."
          className="commentInput"
          onChange={props.onComment}
        />
      </form>
    </div>
  );
};

export default CommentInput;
