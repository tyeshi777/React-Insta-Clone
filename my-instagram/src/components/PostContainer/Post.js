import React from "react";
import "./Post.css";

const Post = props => {
  console.log("props", props);
  return (
    <div>
      <span>
        <Post post={props.post} />
      </span>
    </div>
  );
};

export default Post;
