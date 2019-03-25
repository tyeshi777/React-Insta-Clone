import React from "react";
import "./Comment.css";

const Comment = props => {
  console.log("comment", props);
  return (
    <div>
      <Comment comm={props.comm} />
    </div>
  );
};

export default Comment;
