import React from "react";
import "./Post.css";

const Post = props => {
  console.log("Post", props);
  return (
    <div>
      <div className="headers">
        <section>
          <img src={props.thumbnailUrl} alt="thumbnail" />
        </section>
        <section className="header4">
          <h4>{props.username}</h4>
        </section>
      </div>
      <img src={props.imageUrl} alt="img" />
    </div>
  );
};

export default Post;
